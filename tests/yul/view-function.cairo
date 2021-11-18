%lang starknet
%builtins pedersen range_check bitwise

from evm.calls import calldataload, calldatasize, returndata_write
from evm.exec_env import ExecutionEnvironment
from evm.memory import uint256_mstore
from evm.uint256 import is_eq, is_lt, is_zero, slt, u256_add, u256_shr
from starkware.cairo.common.alloc import alloc
from starkware.cairo.common.cairo_builtins import BitwiseBuiltin, HashBuiltin
from starkware.cairo.common.default_dict import default_dict_finalize, default_dict_new
from starkware.cairo.common.dict_access import DictAccess
from starkware.cairo.common.registers import get_fp_and_pc
from starkware.cairo.common.uint256 import Uint256, uint256_and, uint256_sub, uint256_xor

func abi_decode_uint256t_uint256t_uint256t_uint256{
        exec_env : ExecutionEnvironment*, range_check_ptr}(dataEnd : Uint256) -> (
        value0 : Uint256, value1 : Uint256, value2 : Uint256, value3 : Uint256):
    alloc_locals
    let (__warp_subexpr_1 : Uint256) = u256_add(
        dataEnd,
        Uint256(low=340282366920938463463374607431768211452, high=340282366920938463463374607431768211455))
    let (__warp_subexpr_0 : Uint256) = slt(__warp_subexpr_1, Uint256(low=128, high=0))
    if __warp_subexpr_0.low + __warp_subexpr_0.high != 0:
        assert 0 = 1
        jmp rel 0
    end
    let (value0 : Uint256) = calldataload(Uint256(low=4, high=0))
    let (value1 : Uint256) = calldataload(Uint256(low=36, high=0))
    let (value2 : Uint256) = calldataload(Uint256(low=68, high=0))
    let (value3 : Uint256) = calldataload(Uint256(low=100, high=0))
    return (value0, value1, value2, value3)
end

func __warp_if_0{range_check_ptr}(
        __warp_subexpr_0 : Uint256, expr : Uint256, var_wad : Uint256) -> (var_res : Uint256):
    alloc_locals
    if __warp_subexpr_0.low + __warp_subexpr_0.high != 0:
        let (var_res : Uint256) = uint256_xor(expr, var_wad)
        return (var_res)
    else:
        let (var_res : Uint256) = uint256_and(expr, var_wad)
        return (var_res)
    end
end

func __warp_block_1{range_check_ptr}(expr : Uint256, match_var : Uint256, var_wad : Uint256) -> (
        var_res : Uint256):
    alloc_locals
    let (__warp_subexpr_0 : Uint256) = is_eq(match_var, Uint256(low=0, high=0))
    let (var_res : Uint256) = __warp_if_0(__warp_subexpr_0, expr, var_wad)
    return (var_res)
end

func __warp_block_0{range_check_ptr}(
        expr : Uint256, var_res : Uint256, var_sender : Uint256, var_wad : Uint256) -> (
        var_res : Uint256):
    alloc_locals
    let (__warp_subexpr_0 : Uint256) = uint256_sub(var_res, var_sender)
    let (match_var : Uint256) = is_lt(__warp_subexpr_0, Uint256(low=4, high=0))
    let (var_res : Uint256) = __warp_block_1(expr, match_var, var_wad)
    return (var_res)
end

func fun_viewFunction{range_check_ptr}(
        var_src : Uint256, var_dst : Uint256, var_wad : Uint256, var_sender : Uint256) -> (
        var : Uint256):
    alloc_locals
    let (var_res : Uint256) = uint256_and(var_src, var_dst)
    let (expr : Uint256) = uint256_xor(var_src, var_dst)
    let (var_res : Uint256) = __warp_block_0(expr, var_res, var_sender, var_wad)
    let var : Uint256 = var_res
    return (var)
end

func abi_encode_uint256_to_uint256{memory_dict : DictAccess*, msize, range_check_ptr}(
        value : Uint256) -> ():
    alloc_locals
    uint256_mstore(offset=Uint256(low=128, high=0), value=value)
    return ()
end

func abi_encode_uint256{memory_dict : DictAccess*, msize, range_check_ptr}(value0_1 : Uint256) -> (
        tail : Uint256):
    alloc_locals
    let tail : Uint256 = Uint256(low=160, high=0)
    abi_encode_uint256_to_uint256(value0_1)
    return (tail)
end

func __warp_block_3{
        exec_env : ExecutionEnvironment*, memory_dict : DictAccess*, msize, range_check_ptr}() -> (
        ):
    alloc_locals
    let (__warp_subexpr_0 : Uint256) = calldatasize()
    let (param : Uint256, param_1 : Uint256, param_2 : Uint256,
        param_3 : Uint256) = abi_decode_uint256t_uint256t_uint256t_uint256(__warp_subexpr_0)
    let (__warp_subexpr_3 : Uint256) = fun_viewFunction(param, param_1, param_2, param_3)
    let (__warp_subexpr_2 : Uint256) = abi_encode_uint256(__warp_subexpr_3)
    let (__warp_subexpr_1 : Uint256) = u256_add(
        __warp_subexpr_2,
        Uint256(low=340282366920938463463374607431768211328, high=340282366920938463463374607431768211455))
    returndata_write(Uint256(low=128, high=0), __warp_subexpr_1)
    return ()
end

func __warp_if_2{
        exec_env : ExecutionEnvironment*, memory_dict : DictAccess*, msize, range_check_ptr}(
        __warp_subexpr_0 : Uint256) -> ():
    alloc_locals
    if __warp_subexpr_0.low + __warp_subexpr_0.high != 0:
        __warp_block_3()
        return ()
    else:
        return ()
    end
end

func __warp_block_2{
        exec_env : ExecutionEnvironment*, memory_dict : DictAccess*, msize, range_check_ptr}() -> (
        ):
    alloc_locals
    let (__warp_subexpr_2 : Uint256) = calldataload(Uint256(low=0, high=0))
    let (__warp_subexpr_1 : Uint256) = u256_shr(Uint256(low=224, high=0), __warp_subexpr_2)
    let (__warp_subexpr_0 : Uint256) = is_eq(Uint256(low=2336407271, high=0), __warp_subexpr_1)
    __warp_if_2(__warp_subexpr_0)
    return ()
end

func __warp_if_1{
        exec_env : ExecutionEnvironment*, memory_dict : DictAccess*, msize, range_check_ptr}(
        __warp_subexpr_0 : Uint256) -> ():
    alloc_locals
    if __warp_subexpr_0.low + __warp_subexpr_0.high != 0:
        __warp_block_2()
        return ()
    else:
        return ()
    end
end

@external
func fun_ENTRY_POINT{
        pedersen_ptr : HashBuiltin*, range_check_ptr, syscall_ptr : felt*,
        bitwise_ptr : BitwiseBuiltin*}(calldata_size, calldata_len, calldata : felt*) -> (
        success : felt, returndata_size : felt, returndata_len : felt, returndata : felt*):
    alloc_locals
    let (local __fp__, _) = get_fp_and_pc()
    let (returndata_ptr : felt*) = alloc()
    local exec_env_ : ExecutionEnvironment = ExecutionEnvironment(calldata_size=calldata_size, calldata_len=calldata_len, calldata=calldata, returndata_size=0, returndata_len=0, returndata=returndata_ptr, to_returndata_size=0, to_returndata_len=0, to_returndata=returndata_ptr)
    let exec_env : ExecutionEnvironment* = &exec_env_
    let (local memory_dict) = default_dict_new(0)
    local memory_dict_start : DictAccess* = memory_dict
    let msize = 0
    with exec_env, msize, memory_dict:
        uint256_mstore(offset=Uint256(low=64, high=0), value=Uint256(low=128, high=0))
        let (__warp_subexpr_2 : Uint256) = calldatasize()
        let (__warp_subexpr_1 : Uint256) = is_lt(__warp_subexpr_2, Uint256(low=4, high=0))
        let (__warp_subexpr_0 : Uint256) = is_zero(__warp_subexpr_1)
        __warp_if_1(__warp_subexpr_0)
    end
    default_dict_finalize(memory_dict_start, memory_dict, 0)
    return (1, exec_env.to_returndata_size, exec_env.to_returndata_len, exec_env.to_returndata)
end
