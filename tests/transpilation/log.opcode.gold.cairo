%lang starknet

%builtins pedersen range_check

from evm.exec_env import ExecutionEnvironment
from evm.memory import mstore
from evm.output import Output
from evm.stack import StackItem
from evm.utils import round_up_to_multiple, update_msize
from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.default_dict import default_dict_new
from starkware.cairo.common.dict_access import DictAccess
from starkware.cairo.common.math_cmp import is_le
from starkware.cairo.common.registers import get_fp_and_pc
from starkware.cairo.common.uint256 import Uint256, uint256_eq
from starkware.starknet.common.storage import Storage

func segment0{
        storage_ptr : Storage*, pedersen_ptr : HashBuiltin*, range_check_ptr, msize,
        memory_dict : DictAccess*}(exec_env : ExecutionEnvironment*, stack : StackItem*) -> (
        stack : StackItem*, output : Output):
    alloc_locals
    let stack0 = stack
    let (local __fp__, _) = get_fp_and_pc()
    let (local msize) = update_msize{range_check_ptr=range_check_ptr}(msize, 128, 32)
    local memory_dict : DictAccess* = memory_dict
    local msize = msize
    mstore{memory_dict=memory_dict, range_check_ptr=range_check_ptr}(
        offset=128, value=Uint256(5252, 0))
    local memory_dict : DictAccess* = memory_dict
    let (local msize) = update_msize{range_check_ptr=range_check_ptr}(msize, 160, 32)
    local memory_dict : DictAccess* = memory_dict
    local msize = msize
    mstore{memory_dict=memory_dict, range_check_ptr=range_check_ptr}(
        offset=160, value=Uint256(200, 0))
    local memory_dict : DictAccess* = memory_dict
    let (local msize) = update_msize(msize, 128, 64)
    local memory_dict : DictAccess* = memory_dict
    let (local immediate) = round_up_to_multiple(msize, 32)
    local tmp0 : Uint256 = Uint256(immediate, 0)
    local newitem0 : StackItem = StackItem(value=tmp0, next=stack0)
    return (&newitem0, Output(cast(0, felt*), 0))
end

func run_from{
        storage_ptr : Storage*, pedersen_ptr : HashBuiltin*, range_check_ptr, msize,
        memory_dict : DictAccess*}(
        exec_env : ExecutionEnvironment*, evm_pc, stack : StackItem*) -> (
        stack : StackItem*, output : Output):
    if evm_pc == 0:
        return segment0(exec_env, stack)
    end
    if evm_pc == -1:
        return (stack, Output(cast(0, felt*), 0))
    end
    # Fail.
    assert 0 = 1
    jmp rel 0
end

@external
func main{storage_ptr : Storage*, pedersen_ptr : HashBuiltin*, range_check_ptr}(
        calldata_size, unused_bytes, input_len : felt, input : felt*):
    alloc_locals
    let (local __fp__, _) = get_fp_and_pc()
    local exec_env : ExecutionEnvironment = ExecutionEnvironment(
        calldata_size=calldata_size,
        input_len=input_len,
        input=input,
        )

    let (local memory_dict : DictAccess*) = default_dict_new(0)
    local memory_start : DictAccess* = memory_dict

    tempvar msize = 0

    local stack0 : StackItem
    assert stack0 = StackItem(value=Uint256(-1, 0), next=&stack0)  # Points to itself.

    let (local stack, local output) = segment0{
        storage_ptr=storage_ptr,
        pedersen_ptr=pedersen_ptr,
        range_check_ptr=range_check_ptr,
        msize=msize,
        memory_dict=memory_dict}(&exec_env, &stack0)

    return ()
end
