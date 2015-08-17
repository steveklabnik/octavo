var searchIndex = {};
searchIndex['octavo'] = {"items":[[0,"","octavo","Fancy pure Rust crypto and hash library that main reason to exist is my own self-teaching\nabout cryptography. Other reason to create this (\"We have rust-crypto, why the hell new\nlibrary?\") is that `rust-crypto` was (at the time of creation) big pile of… mess. To be honest\nI doesn't hate `rust-crypto` but I wanted something that will be organized in fancy way, not\nnew OpenSSL (but wwritten in Rust, so probably less buggy).",null,null],[0,"crypto","","",null,null],[0,"symmetric","octavo::crypto","",null,null],[0,"blowfish","octavo::crypto::symmetric","",null,null],[3,"Blowfish","octavo::crypto::symmetric::blowfish","",null,null],[11,"new","","",0,{"inputs":[{"name":"blowfish"},{"name":"t"}],"output":{"name":"self"}}],[11,"init","","",0,{"inputs":[{"name":"blowfish"}],"output":{"name":"self"}}],[11,"block_size","","",0,{"inputs":[{"name":"blowfish"}],"output":{"name":"usize"}}],[11,"encrypt_block","","",0,{"inputs":[{"name":"blowfish"},{"name":"i"},{"name":"o"}],"output":null}],[11,"block_size","","",0,{"inputs":[{"name":"blowfish"}],"output":{"name":"usize"}}],[11,"decrypt_block","","",0,{"inputs":[{"name":"blowfish"},{"name":"i"},{"name":"o"}],"output":null}],[0,"traits","octavo::crypto","",null,null],[8,"BlockEncrypt","octavo::crypto::traits","",null,null],[10,"block_size","","",1,{"inputs":[{"name":"blockencrypt"}],"output":{"name":"usize"}}],[10,"encrypt_block","","",1,{"inputs":[{"name":"blockencrypt"},{"name":"i"},{"name":"o"}],"output":null}],[8,"BlockDecrypt","","",null,null],[10,"block_size","","",2,{"inputs":[{"name":"blockdecrypt"}],"output":{"name":"usize"}}],[10,"decrypt_block","","",2,{"inputs":[{"name":"blockdecrypt"},{"name":"i"},{"name":"o"}],"output":null}],[0,"digest","octavo","Implementation of popular (and less popular, but fancy) hashing algorithms.",null,null],[0,"adler32","octavo::digest","",null,null],[3,"Adler32","octavo::digest::adler32","",null,null],[11,"default","","",3,{"inputs":[{"name":"adler32"}],"output":{"name":"self"}}],[11,"update","","",3,{"inputs":[{"name":"adler32"},{"name":"t"}],"output":null}],[11,"output_bits","","",3,{"inputs":[{"name":"adler32"}],"output":{"name":"usize"}}],[11,"block_size","","",3,{"inputs":[{"name":"adler32"}],"output":{"name":"usize"}}],[11,"result","","",3,{"inputs":[{"name":"adler32"},{"name":"t"}],"output":null}],[0,"crc32","octavo::digest","",null,null],[3,"CRC32","octavo::digest::crc32","",null,null],[11,"with_state","","",4,{"inputs":[{"name":"crc32"},{"name":"u32"}],"output":{"name":"self"}}],[11,"default","","",4,{"inputs":[{"name":"crc32"}],"output":{"name":"self"}}],[11,"update","","",4,{"inputs":[{"name":"crc32"},{"name":"t"}],"output":null}],[11,"output_bits","","",4,{"inputs":[{"name":"crc32"}],"output":{"name":"usize"}}],[11,"block_size","","",4,{"inputs":[{"name":"crc32"}],"output":{"name":"usize"}}],[11,"result","","",4,{"inputs":[{"name":"crc32"},{"name":"t"}],"output":null}],[0,"md4","octavo::digest","",null,null],[3,"MD4","octavo::digest::md4","",null,null],[11,"default","","",5,{"inputs":[{"name":"md4"}],"output":{"name":"self"}}],[11,"update","","",5,{"inputs":[{"name":"md4"},{"name":"t"}],"output":null}],[11,"output_bits","","",5,{"inputs":[{"name":"md4"}],"output":{"name":"usize"}}],[11,"block_size","","",5,{"inputs":[{"name":"md4"}],"output":{"name":"usize"}}],[11,"result","","",5,{"inputs":[{"name":"md4"},{"name":"t"}],"output":null}],[0,"md5","octavo::digest","",null,null],[3,"MD5","octavo::digest::md5","",null,null],[11,"default","","",6,{"inputs":[{"name":"md5"}],"output":{"name":"self"}}],[11,"update","","",6,{"inputs":[{"name":"md5"},{"name":"t"}],"output":null}],[11,"output_bits","","",6,{"inputs":[{"name":"md5"}],"output":{"name":"usize"}}],[11,"block_size","","",6,{"inputs":[{"name":"md5"}],"output":{"name":"usize"}}],[11,"result","","",6,{"inputs":[{"name":"md5"},{"name":"t"}],"output":null}],[0,"sha1","octavo::digest","",null,null],[3,"SHA1","octavo::digest::sha1","",null,null],[11,"default","","",7,{"inputs":[{"name":"sha1"}],"output":{"name":"self"}}],[11,"update","","",7,{"inputs":[{"name":"sha1"},{"name":"t"}],"output":null}],[11,"output_bits","","",7,{"inputs":[{"name":"sha1"}],"output":{"name":"usize"}}],[11,"block_size","","",7,{"inputs":[{"name":"sha1"}],"output":{"name":"usize"}}],[11,"result","","",7,{"inputs":[{"name":"sha1"},{"name":"t"}],"output":null}],[0,"sha2","octavo::digest","",null,null],[3,"SHA224","octavo::digest::sha2","",null,null],[3,"SHA256","","",null,null],[3,"SHA384","","",null,null],[3,"SHA512","","",null,null],[11,"default","","",8,{"inputs":[{"name":"sha224"}],"output":{"name":"self"}}],[11,"update","","",8,{"inputs":[{"name":"sha224"},{"name":"t"}],"output":null}],[11,"output_bits","","",8,{"inputs":[{"name":"sha224"}],"output":{"name":"usize"}}],[11,"block_size","","",8,{"inputs":[{"name":"sha224"}],"output":{"name":"usize"}}],[11,"result","","",8,{"inputs":[{"name":"sha224"},{"name":"t"}],"output":null}],[11,"default","","",9,{"inputs":[{"name":"sha256"}],"output":{"name":"self"}}],[11,"update","","",9,{"inputs":[{"name":"sha256"},{"name":"t"}],"output":null}],[11,"output_bits","","",9,{"inputs":[{"name":"sha256"}],"output":{"name":"usize"}}],[11,"block_size","","",9,{"inputs":[{"name":"sha256"}],"output":{"name":"usize"}}],[11,"result","","",9,{"inputs":[{"name":"sha256"},{"name":"t"}],"output":null}],[11,"default","","",10,{"inputs":[{"name":"sha384"}],"output":{"name":"self"}}],[11,"update","","",10,{"inputs":[{"name":"sha384"},{"name":"t"}],"output":null}],[11,"output_bits","","",10,{"inputs":[{"name":"sha384"}],"output":{"name":"usize"}}],[11,"block_size","","",10,{"inputs":[{"name":"sha384"}],"output":{"name":"usize"}}],[11,"result","","",10,{"inputs":[{"name":"sha384"},{"name":"t"}],"output":null}],[11,"default","","",11,{"inputs":[{"name":"sha512"}],"output":{"name":"self"}}],[11,"update","","",11,{"inputs":[{"name":"sha512"},{"name":"t"}],"output":null}],[11,"output_bits","","",11,{"inputs":[{"name":"sha512"}],"output":{"name":"usize"}}],[11,"block_size","","",11,{"inputs":[{"name":"sha512"}],"output":{"name":"usize"}}],[11,"result","","",11,{"inputs":[{"name":"sha512"},{"name":"t"}],"output":null}],[0,"sha3","octavo::digest","",null,null],[3,"SHA3224","octavo::digest::sha3","",null,null],[3,"SHA3256","","",null,null],[3,"SHA3384","","",null,null],[3,"SHA3512","","",null,null],[11,"default","","",12,{"inputs":[{"name":"sha3224"}],"output":{"name":"self"}}],[11,"update","","",12,{"inputs":[{"name":"sha3224"},{"name":"t"}],"output":null}],[11,"output_bits","","",12,{"inputs":[{"name":"sha3224"}],"output":{"name":"usize"}}],[11,"block_size","","",12,{"inputs":[{"name":"sha3224"}],"output":{"name":"usize"}}],[11,"result","","",12,{"inputs":[{"name":"sha3224"},{"name":"t"}],"output":null}],[11,"default","","",13,{"inputs":[{"name":"sha3256"}],"output":{"name":"self"}}],[11,"update","","",13,{"inputs":[{"name":"sha3256"},{"name":"t"}],"output":null}],[11,"output_bits","","",13,{"inputs":[{"name":"sha3256"}],"output":{"name":"usize"}}],[11,"block_size","","",13,{"inputs":[{"name":"sha3256"}],"output":{"name":"usize"}}],[11,"result","","",13,{"inputs":[{"name":"sha3256"},{"name":"t"}],"output":null}],[11,"default","","",14,{"inputs":[{"name":"sha3384"}],"output":{"name":"self"}}],[11,"update","","",14,{"inputs":[{"name":"sha3384"},{"name":"t"}],"output":null}],[11,"output_bits","","",14,{"inputs":[{"name":"sha3384"}],"output":{"name":"usize"}}],[11,"block_size","","",14,{"inputs":[{"name":"sha3384"}],"output":{"name":"usize"}}],[11,"result","","",14,{"inputs":[{"name":"sha3384"},{"name":"t"}],"output":null}],[11,"default","","",15,{"inputs":[{"name":"sha3512"}],"output":{"name":"self"}}],[11,"update","","",15,{"inputs":[{"name":"sha3512"},{"name":"t"}],"output":null}],[11,"output_bits","","",15,{"inputs":[{"name":"sha3512"}],"output":{"name":"usize"}}],[11,"block_size","","",15,{"inputs":[{"name":"sha3512"}],"output":{"name":"usize"}}],[11,"result","","",15,{"inputs":[{"name":"sha3512"},{"name":"t"}],"output":null}],[8,"Digest","octavo::digest","",null,null],[11,"new","","Creates new instance",16,{"inputs":[{"name":"digest"}],"output":{"name":"self"}}],[10,"update","","Update digest with data.",16,{"inputs":[{"name":"digest"},{"name":"t"}],"output":null}],[10,"output_bits","","Output size in bits",16,{"inputs":[{"name":"digest"}],"output":{"name":"usize"}}],[11,"output_bytes","","Output size in bytes",16,{"inputs":[{"name":"digest"}],"output":{"name":"usize"}}],[10,"block_size","","",16,{"inputs":[{"name":"digest"}],"output":{"name":"usize"}}],[10,"result","","Write resulting hash into `output`.",16,{"inputs":[{"name":"digest"},{"name":"t"}],"output":null}],[11,"hex_result","","Returns hash as lowercase hexadecimal string",16,{"inputs":[{"name":"digest"}],"output":{"name":"string"}}],[0,"mac","octavo","",null,null],[0,"hmac","octavo::mac","",null,null],[3,"HMAC","octavo::mac::hmac","",null,null],[11,"new","","",17,{"inputs":[{"name":"hmac"},{"name":"k"}],"output":{"name":"self"}}],[11,"update","","",17,{"inputs":[{"name":"hmac"},{"name":"d"}],"output":null}],[11,"output_bits","","",17,{"inputs":[{"name":"hmac"}],"output":{"name":"usize"}}],[11,"block_size","","",17,{"inputs":[{"name":"hmac"}],"output":{"name":"usize"}}],[11,"result","","",17,{"inputs":[{"name":"hmac"},{"name":"o"}],"output":null}],[8,"MAC","octavo::mac","",null,null],[10,"new","","",18,{"inputs":[{"name":"mac"},{"name":"k"}],"output":{"name":"self"}}],[10,"update","","",18,{"inputs":[{"name":"mac"},{"name":"d"}],"output":null}],[10,"output_bits","","Output size in bits",18,{"inputs":[{"name":"mac"}],"output":{"name":"usize"}}],[11,"output_bytes","","Output size in bytes",18,{"inputs":[{"name":"mac"}],"output":{"name":"usize"}}],[10,"block_size","","",18,{"inputs":[{"name":"mac"}],"output":{"name":"usize"}}],[10,"result","","Write resulting hash into `output`.",18,{"inputs":[{"name":"mac"},{"name":"t"}],"output":null}],[11,"hex_result","","Returns hash as lowercase hexadecimal string",18,{"inputs":[{"name":"mac"}],"output":{"name":"string"}}]],"paths":[[3,"Blowfish"],[8,"BlockEncrypt"],[8,"BlockDecrypt"],[3,"Adler32"],[3,"CRC32"],[3,"MD4"],[3,"MD5"],[3,"SHA1"],[3,"SHA224"],[3,"SHA256"],[3,"SHA384"],[3,"SHA512"],[3,"SHA3224"],[3,"SHA3256"],[3,"SHA3384"],[3,"SHA3512"],[8,"Digest"],[3,"HMAC"],[8,"MAC"]]};
searchIndex['byteorder'] = {"items":[[0,"","byteorder","This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.",null,null],[4,"Error","","An error type for reading bytes.",null,null],[13,"UnexpectedEOF","","An unexpected EOF.",0,null],[13,"Io","","Any underlying IO error that occurs while reading bytes.",0,null],[4,"BigEndian","","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"from","std::io::error","",1,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","byteorder","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[6,"Result","","A short-hand for `result::Result<T, byteorder::Error>`.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f64"}],"output":{"name":"result"}}],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",4,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",4,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",4,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",4,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",4,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",4,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",4,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",4,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",4,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",4,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",4,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",4,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",4,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",4,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",4,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",4,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",4,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",4,null],[11,"read_u16","","",5,null],[11,"read_u32","","",5,null],[11,"read_u64","","",5,null],[11,"read_uint","","",5,null],[11,"write_u16","","",5,null],[11,"write_u32","","",5,null],[11,"write_u64","","",5,null],[11,"read_u16","","",6,null],[11,"read_u32","","",6,null],[11,"read_u64","","",6,null],[11,"read_uint","","",6,null],[11,"write_u16","","",6,null],[11,"write_u32","","",6,null],[11,"write_u64","","",6,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f64"}],"output":{"name":"result"}}]],"paths":[[4,"Error"],[3,"Error"],[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
initSearch(searchIndex);
