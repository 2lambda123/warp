from starkware.cairo.common.alloc import alloc
from starkware.cairo.common.dict import dict_read, dict_write
from starkware.cairo.common.dict_access import DictAccess
from starkware.cairo.common.math import split_felt
from starkware.cairo.common.math_cmp import is_le
from starkware.cairo.common.uint256 import (
    Uint256,
    uint256_add,
    uint256_sub,
    uint256_le,
    uint256_lt,
    uint256_mul,
)
from warplib.maths.utils import felt_to_uint256, narrow_safe

// =================================THE PLAN=================================
// Memory needs to be able to handle the following types:
// Scalars
//     Ints, bools, addresses, etc
// Arrays
//     Static, and dynamic
// Structs

// Scalars are easy, they fit in one or two felts each, and read functions
// can be prewritten here

// Static arrays are just elements laid out consecutively in memory

// Dynamic arrays are harder, they are stored as felts that 'point' to an
// allocated data space that contains first the length and then the data
// This means that they can have a known size when being packed into a
// compound type but can still have a number of elements known only at runtime

// ===========================================================================

// -----------------Scalars-----------------

func wm_read_felt{warp_memory: DictAccess*}(loc: felt) -> (val: felt) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (res,);
}

func wm_read_8{warp_memory: DictAccess*}(loc: felt) -> (val: u8) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u8_from_felt(res),);
}

func wm_read_16{warp_memory: DictAccess*}(loc: felt) -> (val: u16) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u16_from_felt(res),);
}

func wm_read_24{warp_memory: DictAccess*}(loc: felt) -> (val: u24) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u24_from_felt(res),);
}

func wm_read_32{warp_memory: DictAccess*}(loc: felt) -> (val: u32) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u32_from_felt(res),);
}

func wm_read_40{warp_memory: DictAccess*}(loc: felt) -> (val: u40) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u40_from_felt(res),);
}

func wm_read_48{warp_memory: DictAccess*}(loc: felt) -> (val: u48) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u48_from_felt(res),);
}

func wm_read_56{warp_memory: DictAccess*}(loc: felt) -> (val: u56) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u56_from_felt(res),);
}

func wm_read_64{warp_memory: DictAccess*}(loc: felt) -> (val: u64) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u64_from_felt(res),);
}

func wm_read_72{warp_memory: DictAccess*}(loc: felt) -> (val: u72) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u72_from_felt(res),);
}

func wm_read_80{warp_memory: DictAccess*}(loc: felt) -> (val: u80) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u80_from_felt(res),);
}

func wm_read_88{warp_memory: DictAccess*}(loc: felt) -> (val: u88) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u88_from_felt(res),);
}

func wm_read_96{warp_memory: DictAccess*}(loc: felt) -> (val: u96) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u96_from_felt(res),);
}

func wm_read_104{warp_memory: DictAccess*}(loc: felt) -> (val: u104) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u104_from_felt(res),);
}

func wm_read_112{warp_memory: DictAccess*}(loc: felt) -> (val: u112) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u112_from_felt(res),);
}

func wm_read_120{warp_memory: DictAccess*}(loc: felt) -> (val: u120) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u120_from_felt(res),);
}

func wm_read_128{warp_memory: DictAccess*}(loc: felt) -> (val: u128) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u128_from_felt(res),);
}

func wm_read_136{warp_memory: DictAccess*}(loc: felt) -> (val: u136) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u136_from_felt(res),);
}

func wm_read_144{warp_memory: DictAccess*}(loc: felt) -> (val: u144) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u144_from_felt(res),);
}

func wm_read_152{warp_memory: DictAccess*}(loc: felt) -> (val: u152) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u152_from_felt(res),);
}

func wm_read_160{warp_memory: DictAccess*}(loc: felt) -> (val: u160) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u160_from_felt(res),);
}

func wm_read_168{warp_memory: DictAccess*}(loc: felt) -> (val: u168) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u168_from_felt(res),);
}

func wm_read_176{warp_memory: DictAccess*}(loc: felt) -> (val: u176) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u176_from_felt(res),);
}

func wm_read_184{warp_memory: DictAccess*}(loc: felt) -> (val: u184) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u184_from_felt(res),);
}

func wm_read_192{warp_memory: DictAccess*}(loc: felt) -> (val: u192) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u192_from_felt(res),);
}

func wm_read_200{warp_memory: DictAccess*}(loc: felt) -> (val: u200) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u200_from_felt(res),);
}

func wm_read_208{warp_memory: DictAccess*}(loc: felt) -> (val: u208) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u208_from_felt(res),);
}

func wm_read_216{warp_memory: DictAccess*}(loc: felt) -> (val: u216) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u216_from_felt(res),);
}

func wm_read_224{warp_memory: DictAccess*}(loc: felt) -> (val: u224) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u224_from_felt(res),);
}

func wm_read_232{warp_memory: DictAccess*}(loc: felt) -> (val: u232) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u232_from_felt(res),);
}

func wm_read_240{warp_memory: DictAccess*}(loc: felt) -> (val: u240) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u240_from_felt(res),);
}

func wm_read_248{warp_memory: DictAccess*}(loc: felt) -> (val: u248) {
    let (res) = dict_read{dict_ptr=warp_memory}(loc);
    return (u248_from_felt(res),);
}

func wm_read_256{warp_memory: DictAccess*}(loc: felt) -> (val: u256) {
    let (low) = dict_read{dict_ptr=warp_memory}(loc);
    let (high) = dict_read{dict_ptr=warp_memory}(loc + 1);
    return (Uint256(low, high),);
}

func wm_write_felt{warp_memory: DictAccess*}(loc: felt, value: felt) -> (res: felt) {
    dict_write{dict_ptr=warp_memory}(loc, value);
    return (value,);
}


func wm_write_8{warp_memory: DictAccess*}(loc: felt, value: u8) -> (res: u8) {
    let (fvalue) = u8_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_16{warp_memory: DictAccess*}(loc: felt, value: u16) -> (res: u16) {
    let (fvalue) = u16_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_24{warp_memory: DictAccess*}(loc: felt, value: u24) -> (res: u24) {
    let (fvalue) = u24_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_32{warp_memory: DictAccess*}(loc: felt, value: u32) -> (res: u32) {
    let (fvalue) = u32_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_40{warp_memory: DictAccess*}(loc: felt, value: u40) -> (res: u40) {
    let (fvalue) = u40_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_48{warp_memory: DictAccess*}(loc: felt, value: u48) -> (res: u48) {
    let (fvalue) = u48_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_56{warp_memory: DictAccess*}(loc: felt, value: u56) -> (res: u56) {
    let (fvalue) = u56_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_64{warp_memory: DictAccess*}(loc: felt, value: u64) -> (res: u64) {
    let (fvalue) = u64_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_72{warp_memory: DictAccess*}(loc: felt, value: u72) -> (res: u72) {
    let (fvalue) = u72_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_80{warp_memory: DictAccess*}(loc: felt, value: u80) -> (res: u80) {
    let (fvalue) = u80_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_88{warp_memory: DictAccess*}(loc: felt, value: u88) -> (res: u88) {
    let (fvalue) = u88_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_96{warp_memory: DictAccess*}(loc: felt, value: u96) -> (res: u96) {
    let (fvalue) = u96_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_104{warp_memory: DictAccess*}(loc: felt, value: u104) -> (res: u104) {
    let (fvalue) = u104_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_112{warp_memory: DictAccess*}(loc: felt, value: u112) -> (res: u112) {
    let (fvalue) = u112_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_120{warp_memory: DictAccess*}(loc: felt, value: u120) -> (res: u120) {
    let (fvalue) = u120_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_128{warp_memory: DictAccess*}(loc: felt, value: u128) -> (res: u128) {
    let (fvalue) = u128_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_136{warp_memory: DictAccess*}(loc: felt, value: u136) -> (res: u136) {
    let (fvalue) = u136_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_144{warp_memory: DictAccess*}(loc: felt, value: u144) -> (res: u144) {
    let (fvalue) = u144_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_152{warp_memory: DictAccess*}(loc: felt, value: u152) -> (res: u152) {
    let (fvalue) = u152_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_160{warp_memory: DictAccess*}(loc: felt, value: u160) -> (res: u160) {
    let (fvalue) = u160_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_168{warp_memory: DictAccess*}(loc: felt, value: u168) -> (res: u168) {
    let (fvalue) = u168_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_176{warp_memory: DictAccess*}(loc: felt, value: u176) -> (res: u176) {
    let (fvalue) = u176_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_184{warp_memory: DictAccess*}(loc: felt, value: u184) -> (res: u184) {
    let (fvalue) = u184_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_192{warp_memory: DictAccess*}(loc: felt, value: u192) -> (res: u192) {
    let (fvalue) = u192_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_200{warp_memory: DictAccess*}(loc: felt, value: u200) -> (res: u200) {
    let (fvalue) = u200_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_208{warp_memory: DictAccess*}(loc: felt, value: u208) -> (res: u208) {
    let (fvalue) = u208_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_216{warp_memory: DictAccess*}(loc: felt, value: u216) -> (res: u216) {
    let (fvalue) = u216_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_224{warp_memory: DictAccess*}(loc: felt, value: u224) -> (res: u224) {
    let (fvalue) = u224_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_232{warp_memory: DictAccess*}(loc: felt, value: u232) -> (res: u232) {
    let (fvalue) = u232_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_240{warp_memory: DictAccess*}(loc: felt, value: u240) -> (res: u240) {
    let (fvalue) = u240_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}
func wm_write_248{warp_memory: DictAccess*}(loc: felt, value: u248) -> (res: u248) {
    let (fvalue) = u248_to_felt(value);
    dict_write{dict_ptr=warp_memory}(loc, fvalue);
    return (value,);
}

func wm_write_256{warp_memory: DictAccess*}(loc: felt, value: Uint256) -> (res: Uint256) {
    dict_write{dict_ptr=warp_memory}(loc, value.low);
    dict_write{dict_ptr=warp_memory}(loc + 1, value.high);
    return (value,);
}

// -----------------Arrays-----------------

func wm_index_static{range_check_ptr}(
    arrayLoc: felt, index: Uint256, width: Uint256, length: Uint256
) -> (loc: felt) {
    // Check that the array index is valid
    let (inRange) = uint256_lt(index, length);
    assert inRange = 1;

    // Multiply index by element width to calculate felt offset
    let (offset: Uint256, overflow: Uint256) = uint256_mul(index, width);
    assert overflow.low = 0;
    assert overflow.high = 0;

    // Add felt offset to address of array to get address of element
    let (arrayLoc256: Uint256) = felt_to_uint256(arrayLoc);
    let (res: Uint256, carry: felt) = uint256_add(arrayLoc256, offset);
    assert carry = 0;

    // Safely narrow back to felt
    let (loc: felt) = narrow_safe(res);
    return (loc,);
}

func wm_index_dyn{range_check_ptr, warp_memory: DictAccess*}(
    arrayLoc: felt, index: Uint256, width: Uint256
) -> (loc: felt) {
    alloc_locals;
    // Get the length of the array and check that the index is within bounds
    let (length: Uint256) = wm_read_256(arrayLoc);
    let (inRange) = uint256_lt(index, length);
    assert inRange = 1;

    // Calculate the location of the element
    let (offset: Uint256, overflow: Uint256) = uint256_mul(index, width);
    assert overflow.low = 0;
    assert overflow.high = 0;

    let (elementZeroPtr) = felt_to_uint256(arrayLoc + 2);
    let (res256: Uint256, carry) = uint256_add(elementZeroPtr, offset);
    assert carry = 0;
    let (res) = narrow_safe(res256);

    return (res,);
}

func wm_new{range_check_ptr, warp_memory: DictAccess*}(len: Uint256, elemWidth: Uint256) -> (
    loc: felt
) {
    alloc_locals;
    // Calculate space needed for array elements
    let (feltLength: Uint256, overflow: Uint256) = uint256_mul(len, elemWidth);
    assert overflow.low = 0;
    assert overflow.high = 0;

    // Add space required to include the length member
    let (feltLength: Uint256, carry: felt) = uint256_add(feltLength, Uint256(2, 0));
    assert carry = 0;

    let (loc) = wm_alloc(feltLength);
    dict_write{dict_ptr=warp_memory}(loc, len.low);
    dict_write{dict_ptr=warp_memory}(loc + 1, len.high);
    return (loc,);
}

func wm_dyn_array_length{warp_memory: DictAccess*}(arrayLoc: felt) -> (len: Uint256) {
    let (low) = dict_read{dict_ptr=warp_memory}(arrayLoc);
    let (high) = dict_read{dict_ptr=warp_memory}(arrayLoc + 1);
    return (Uint256(low, high),);
}

// The wm_bytes methods below are not currently in use since solidity dynamic
// memory arrays do not support `push` and `pop` operations. They are kept with
// the expectation that they will likely be added to solidity soon.
func wm_bytes_new{range_check_ptr, warp_memory: DictAccess*}(len: Uint256) -> (loc: felt) {
    alloc_locals;
    // Create an array to hold the bytes
    let (arrayLoc) = wm_alloc(len);

    // Create a location with the metadata for the bytesLoc
    // Size is five for (lenght: Uint256, capacity: Uint256, ptr: felt)
    let (loc) = wm_alloc(Uint256(5, 0));
    dict_write{dict_ptr=warp_memory}(loc, len.low);
    dict_write{dict_ptr=warp_memory}(loc + 1, len.high);
    dict_write{dict_ptr=warp_memory}(loc + 2, len.low);
    dict_write{dict_ptr=warp_memory}(loc + 3, len.high);
    dict_write{dict_ptr=warp_memory}(loc + 4, arrayLoc);

    return (loc,);
}

func wm_bytes_push{range_check_ptr, warp_memory: DictAccess*}(bytesLoc: felt, value: felt) -> (
    len: Uint256
) {
    alloc_locals;

    // Compute the new length
    let (length) = wm_read_256(bytesLoc);
    let (newLength, carry) = uint256_add(length, Uint256(1, 0));
    assert carry = 0;

    // Update the length in memory
    dict_write{dict_ptr=warp_memory}(bytesLoc, newLength.low);
    dict_write{dict_ptr=warp_memory}(bytesLoc + 1, newLength.high);

    let (capacity) = wm_read_256(bytesLoc + 2);
    let (arrayLoc) = wm_read_felt(bytesLoc + 4);

    // Check our memory array has enough capacity
    let (le) = uint256_lt(length, capacity);
    if (le == 1) {
        // Add length to address of array to get address of the new slot
        let (arrayLoc256) = felt_to_uint256(arrayLoc);
        let (res: Uint256, carry: felt) = uint256_add(arrayLoc256, length);
        assert carry = 0;
        // Safely narrow back to felt
        let (loc: felt) = narrow_safe(res);
        // Write the new value
        dict_write{dict_ptr=warp_memory}(loc, value);
    } else {
        // Double the capacity
        let (newCapacity, mulCarry) = uint256_mul(capacity, Uint256(2, 0));
        // This assert isn't perfect, if the old capacity is >= 2^255 this will
        // fail while there may still be plenty of capacity left. However there
        // is no computer capable of hitting this bound so I'm happy to fail
        // early
        assert mulCarry = Uint256(0, 0);
        let (newArrayLoc) = wm_alloc(newCapacity);

        // Copy the old array to the new one
        let (len) = narrow_safe(length);
        wm_copy(arrayLoc, newArrayLoc, len);

        // Update the capacity in memory
        dict_write{dict_ptr=warp_memory}(bytesLoc + 2, newCapacity.low);
        dict_write{dict_ptr=warp_memory}(bytesLoc + 3, newCapacity.high);
        // Update the array pointer
        dict_write{dict_ptr=warp_memory}(bytesLoc + 4, newArrayLoc);

        // Add length to address of array to get address of the new slot
        let (arrayLoc256) = felt_to_uint256(newArrayLoc);
        let (res: Uint256, carry: felt) = uint256_add(arrayLoc256, length);
        assert carry = 0;
        // Safely narrow back to felt
        let (loc: felt) = narrow_safe(res);

        // Write the new value
        dict_write{dict_ptr=warp_memory}(loc, value);
    }
    return (newLength,);
}

func wm_bytes_pop{range_check_ptr, warp_memory: DictAccess*}(bytesLoc: felt) -> (
    value: felt, len: Uint256
) {
    alloc_locals;
    let (length) = wm_read_256(bytesLoc);
    // Assert the pop operation is not on an empty array
    if (length.low + length.high == 0) {
        assert 1 = 0;
    }

    // Compute the new length
    let (newLength) = uint256_sub(length, Uint256(1, 0));

    // Read the popped value

    // Read the pointer to array
    let (arrayLoc) = wm_read_felt(bytesLoc + 4);
    // Add newLength to address of array to get address of the tail
    let (arrayLoc256) = felt_to_uint256(arrayLoc);
    let (res: Uint256, carry: felt) = uint256_add(arrayLoc256, newLength);
    assert carry = 0;
    // Safely narrow back to felt
    let (loc: felt) = narrow_safe(res);

    // Read the value
    let (value) = dict_read{dict_ptr=warp_memory}(loc);

    // Write the new length
    dict_write{dict_ptr=warp_memory}(bytesLoc, newLength.low);
    dict_write{dict_ptr=warp_memory}(bytesLoc + 1, newLength.high);

    return (value, newLength);
}

func wm_bytes_index{range_check_ptr, warp_memory: DictAccess*}(bytesLoc: felt, index: Uint256) -> (
    res: felt
) {
    alloc_locals;

    // Get the arrayLoc
    let (arrayLoc) = wm_read_felt(bytesLoc + 4);

    // Get the length of the array and check that the index is within bounds
    let (length: Uint256) = wm_read_256(bytesLoc);
    let (inRange) = uint256_lt(index, length);
    assert inRange = 1;

    let (arrayLoc256) = felt_to_uint256(arrayLoc);
    let (res256: Uint256, carry) = uint256_add(arrayLoc256, index);
    assert carry = 0;
    let (res) = narrow_safe(res256);

    return (res,);
}

func wm_bytes_length{warp_memory: DictAccess*}(bytesLoc: felt) -> (len: Uint256) {
    let (res: Uint256) = wm_read_256(bytesLoc);
    return (res,);
}

func wm_bytes_to_fixed32{range_check_ptr, warp_memory: DictAccess*}(bytesLoc: felt) -> (
    res: Uint256
) {
    alloc_locals;
    let (dataLength) = wm_read_256(bytesLoc);
    if (dataLength.high == 0) {
        let (high) = wm_bytes_to_fixed_helper(bytesLoc + 2, 16, dataLength.low, 0);
        let short = is_le(dataLength.low, 16);
        if (short == 0) {
            let (low) = wm_bytes_to_fixed_helper(bytesLoc + 18, 16, dataLength.low - 16, 0);
            return (Uint256(low, high),);
        } else {
            return (Uint256(0, high),);
        }
    } else {
        let (high) = wm_bytes_to_fixed_helper(bytesLoc + 2, 16, 16, 0);
        let (low) = wm_bytes_to_fixed_helper(bytesLoc + 18, 16, 16, 0);
        return (Uint256(low, high),);
    }
}

func wm_bytes_to_fixed{warp_memory: DictAccess*}(bytesLoc: felt, width: felt) -> (res: felt) {
    alloc_locals;
    let (dataLength) = wm_read_256(bytesLoc);
    if (dataLength.high == 0) {
        return wm_bytes_to_fixed_helper(bytesLoc + 2, width, dataLength.low, 0);
    } else {
        return wm_bytes_to_fixed_helper(bytesLoc + 2, width, width, 0);
    }
}

// -----------------Structs-----------------

func index_struct(loc: felt, index: felt) -> (indexLoc: felt) {
    // No need to range check here, that was already done when the struct was allocated
    return (loc + index,);
}

// -----------------Helper functions-----------------

// Returns an existing pointer to a reference data type structure. If it does not exist, it will
// create a new pointer
func wm_read_id{range_check_ptr: felt, warp_memory: DictAccess*}(loc: felt, size: Uint256) -> (
    val: felt
) {
    let (id) = dict_read{dict_ptr=warp_memory}(loc);
    if (id != 0) {
        return (id,);
    }
    let (id) = wm_alloc(size);
    dict_write{dict_ptr=warp_memory}(loc, id);
    return (id,);
}

// Moves the free-memory pointer to allocate the given number of cells, and returns the index
// of the start of the allocated space
func wm_alloc{range_check_ptr, warp_memory: DictAccess*}(space: Uint256) -> (start: felt) {
    alloc_locals;
    // Get current end pointer
    let (freeCell) = dict_read{dict_ptr=warp_memory}(0);

    // Widen to uint256 for safe calculation and because array lengths are uint256
    let (freeCell256) = felt_to_uint256(freeCell);
    let (newFreeCell256: Uint256, carry) = uint256_add(freeCell256, space);
    assert carry = 0;
    let (newFreeCell) = narrow_safe(newFreeCell256);
    dict_write{dict_ptr=warp_memory}(0, newFreeCell);
    return (freeCell,);
}

// Copies length felts from src to dst
func wm_copy{warp_memory: DictAccess*}(src: felt, dst: felt, length: felt) {
    alloc_locals;
    if (length == 0) {
        return ();
    }

    let (srcVal) = dict_read{dict_ptr=warp_memory}(src);
    dict_write{dict_ptr=warp_memory}(dst, srcVal);

    wm_copy(src + 1, dst + 1, length - 1);
    return ();
}

// Converts an array in memory to a felt array
func wm_to_felt_array{range_check_ptr, warp_memory: DictAccess*}(loc: felt) -> (
    length: felt, output: felt*
) {
    alloc_locals;
    let (output: felt*) = alloc();

    let (lengthUint256: Uint256) = wm_read_256(loc);
    let (length_felt: felt) = narrow_safe(lengthUint256);

    wm_to_felt_array_helper(loc + 2, 0, length_felt, output);

    return (length_felt, output);
}

func wm_to_felt_array_helper{range_check_ptr, warp_memory: DictAccess*}(
    loc: felt, index: felt, length: felt, output: felt*
) {
    alloc_locals;
    if (index == length) {
        return ();
    }

    let (value: felt) = dict_read{dict_ptr=warp_memory}(loc);
    assert output[index] = value;

    return wm_to_felt_array_helper(loc + 1, index + 1, length, output);
}

func wm_bytes_to_fixed_helper{warp_memory: DictAccess*}(
    bytesDataLoc: felt, targetWidth: felt, dataLength: felt, acc: felt
) -> (res: felt) {
    alloc_locals;
    if (targetWidth == 0) {
        return (acc,);
    }
    if (dataLength == 0) {
        return wm_bytes_to_fixed_helper(
            bytesDataLoc + 1, targetWidth - 1, dataLength - 1, 256 * acc
        );
    } else {
        let (byte) = wm_read_felt(bytesDataLoc);
        return wm_bytes_to_fixed_helper(
            bytesDataLoc + 1, targetWidth - 1, dataLength - 1, 256 * acc + byte
        );
    }
}