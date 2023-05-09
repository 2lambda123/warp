use warplib::warp_memory::WarpMemory;
use warplib::warp_memory::WarpMemoryTrait;
use warplib::warp_memory::WarpMemoryImpl;

// ==================== Basic Functions ====================

#[test]
fn test_init(){
    let mut warp_memory = WarpMemoryTrait::initialize();
    assert(warp_memory.pointer == 0, 'Pointer is not 0');

    warp_memory.unsafe_alloc(5);
    assert(warp_memory.pointer == 5, 'Pointer is not 5');

    warp_memory.alloc(10);
    assert(warp_memory.pointer == 15, 'Pointer is not 15');
}

#[test]
#[should_panic]
fn test_alloc(){
    let mut warp_memory = WarpMemoryTrait::initialize();

    warp_memory.alloc(10);
    assert(warp_memory.pointer == 10, 'Pointer is not 10');

    // this should crash due to pointer overflow
    warp_memory.alloc(-1);

}

#[test]
fn test_unsafe_access() {
    let mut warp_memory = WarpMemoryTrait::initialize();
    warp_memory.unsafe_write(3, 5); 
    
    let read_from_unallocated = warp_memory.unsafe_read(3);
    assert(read_from_unallocated == 5, 'Invalid read value');
    assert(warp_memory.pointer == 0, 'Pointer is not 0');
}

#[test] 
#[should_panic]
fn test_unallocated_write() {
    let mut warp_memory = WarpMemoryTrait::initialize();
    warp_memory.write(3, 5); 
}

#[test] 
#[should_panic]
fn test_unallocated_read() {
    let mut warp_memory = WarpMemoryTrait::initialize();
    warp_memory.read(3); 
}

#[test]
fn test_access(){
    let mut warp_memory = WarpMemoryTrait::initialize();

    let ptr1 = warp_memory.unsafe_alloc(2);
    assert(ptr1 == 0, 'Pointer is not 0');
    assert(warp_memory.pointer == 2, 'Pointer is not 2');

    warp_memory.write(ptr1, 2); 
    warp_memory.write(ptr1 + 1, 3); 
    assert(warp_memory.read(ptr1) == 2, 'Invalid read value');
    assert(warp_memory.read(ptr1 + 1) == 3, 'Invalid read value');

    let ptr2 = warp_memory.unsafe_alloc(3);
    assert(ptr2 == 2, 'Pointer is not 2');
    assert(warp_memory.pointer == 5, 'Pointer is not 5');

    warp_memory.write(ptr2, 4); 
    warp_memory.write(ptr2 + 1, 5); 
    warp_memory.write(ptr2 + 2, 6); 
    assert(warp_memory.read(ptr2) == 4, 'Invalid read value');
    assert(warp_memory.read(ptr2 + 1) == 5, 'Invalid read value');
    assert(warp_memory.read(ptr2 + 2) == 6, 'Invalid read value');
}

// ==================== Complex Functions ====================
use warplib::warp_memory::WarpMemoryArraysTrait;

#[test]
fn test_get_or_create_id(){
    let mut warp_memory = WarpMemoryTrait::initialize();

    let ptr1 = warp_memory.unsafe_alloc(2);
    warp_memory.write(ptr1, 3);

    let read_id1 = warp_memory.get_or_create_id(ptr1, 10);
    assert(read_id1 == 3, 'Invalid read id value');

    let read_id2 = warp_memory.get_or_create_id(ptr1 + 1, 10);
    assert(read_id2 == 2, 'Invalid read id value');
    assert(warp_memory.pointer == 12, 'Invalid pointer value');
}

#[test]
fn test_new_dynamic_array(){
    let mut warp_memory = WarpMemoryTrait::initialize();

    let dyn_array = warp_memory.new_dynamic_array(-2, 1);
    assert(warp_memory.pointer == -1, 'Invalid pointer value');
    assert(warp_memory.read(dyn_array) == -2, 'Invalid length value');
}

#[test]
#[should_panic]
fn test_new_dynamic_array_overflow_1(){
    let mut warp_memory = WarpMemoryTrait::initialize();

    let dyn_array = warp_memory.new_dynamic_array(-1, 1);
}

#[test]
#[should_panic]
fn test_new_dynamic_array_overflow_2(){
    let mut warp_memory = WarpMemoryTrait::initialize();

    let dyn_array = warp_memory.new_dynamic_array(-2, 2);
}

#[test]
fn test_index_dyn(){
    let mut warp_memory = WarpMemoryTrait::initialize();
    let dyn_array = warp_memory.new_dynamic_array(5, 2);
    assert(warp_memory.pointer == 11, 'Invalid pointer value');

    warp_memory.unsafe_write(1, 2);
    warp_memory.unsafe_write(3, 3);
    warp_memory.unsafe_write(9, 5);
    warp_memory.unsafe_write(5, 7);

    let value = warp_memory.index_dyn(dyn_array, 0, 2);
    assert(value == 2, 'Invalid index location (2)');

    let value = warp_memory.index_dyn(dyn_array, 1, 2);
    assert(value == 3, 'Invalid index location (3)');

    let value = warp_memory.index_dyn(dyn_array, 4, 2);
    assert(value == 5, 'Invalid index location (5)');

    let value = warp_memory.index_dyn(dyn_array, 1, 4);
    assert(value == 7, 'Invalid index location (7)');
}

#[test]
#[should_panic]
fn test_index_dyn_out_of_range(){
    let mut warp_memory = WarpMemoryTrait::initialize();
    let dyn_array = warp_memory.new_dynamic_array(5, 2);

    warp_memory.index_dyn(dyn_array, 5, 2);
}

#[test]
#[should_panic]
fn test_index_static(){
    let mut warp_memory = WarpMemoryTrait::initialize();
    let length = 10;
    let static_array = warp_memory.unsafe_alloc(length);

    let value_loc = warp_memory.index_static(static_array, 0, 2, length);
    assert(value_loc == 0, 'Invalid index location');

    let value_loc = warp_memory.index_static(static_array, 1, 2, length);
    assert(value_loc == 2, 'Invalid index location');

    let value_loc = warp_memory.index_static(static_array, 4, 2, length);
    assert(value_loc == 8, 'Invalid index location');

    let value_loc = warp_memory.index_static(static_array, 1, 4, length);
    assert(value_loc == 4, 'Invalid index location');
}

#[test]
#[should_panic]
fn test_index_static_out_of_range(){
    let mut warp_memory = WarpMemoryTrait::initialize();
    let length = 10;
    let static_array = warp_memory.unsafe_alloc(length);

    warp_memory.index_static(static_array, 5, 2, length);
}

#[test]
#[should_panic]
fn test_dyn_length() {
    let mut warp_memory = WarpMemoryTrait::initialize();
    let dyn_array = warp_memory.new_dynamic_array(5, 3);

    assert(warp_memory.length_dyn(dyn_array) == 16, 'Invalid lenght');
}

// ==================== Accessor Functions ====================
use array::ArrayTrait;
use integer::u32_to_felt252;
use option::OptionTrait;
use warplib::warp_memory::WarpMemoryMultiCellAccessorTrait;

#[test]
#[available_gas(1000000)]
fn test_access_multiple() {
    let mut values = ArrayTrait::new();
    values.append(2);
    values.append(3);
    values.append(5);

    let mut warp_memory = WarpMemoryTrait::initialize();
    let pointer = warp_memory.unsafe_alloc(3);
    
    warp_memory.write_multiple(pointer, ref values);

    let mut read_values = warp_memory.read_multiple(pointer, u32_to_felt252(values.len()));
    loop {
        match gas::withdraw_gas() {
           Option::Some(_) => {},
           Option::None(_) => {
                panic_with_felt252('Out of gas');
           }
        }

        if  values.len() == 0 {
            break();
        }
        let val = values.pop_front().unwrap();
        let read_val = read_values.pop_front().unwrap();
        assert(val == read_val, 'Values do not match');
    };
}

#[test]
#[available_gas(1000000)]
#[should_panic]
fn test_write_multiple_overflow() {

    let mut values = ArrayTrait::new();
    values.append(2);
    values.append(3);
    values.append(5);

    let mut warp_memory = WarpMemoryTrait::initialize();
    warp_memory.unsafe_alloc(-1);
    
    warp_memory.write_multiple(-3, ref values);
}

#[test]
#[available_gas(1000000)]
#[should_panic]
fn test_write_multiple_unallocated() {

    let mut values = ArrayTrait::new();
    values.append(2);
    values.append(3);
    values.append(5);

    let mut warp_memory = WarpMemoryTrait::initialize();
    let pointer = warp_memory.unsafe_alloc(2);
    
    warp_memory.write_multiple(pointer, ref values);
}

#[test]
#[available_gas(1000000)]
#[should_panic]
fn test_read_multiple_overflow() {
    let mut warp_memory = WarpMemoryTrait::initialize();
    warp_memory.unsafe_alloc(-1);
    warp_memory.read_multiple(-3, 3);
}

#[test]
#[available_gas(1000000)]
#[should_panic]
fn test_read_multiple_unallocated() {
    let mut warp_memory = WarpMemoryTrait::initialize();
    let pointer = warp_memory.unsafe_alloc(2);
    warp_memory.read_multiple(pointer, 3);
}