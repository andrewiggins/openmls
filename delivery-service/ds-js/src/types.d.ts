// #region Rust types

type Vec<T> = T[];
type u8 = number;
type u16 = number;
type u32 = number;
type u64 = number;

// #endregion Rust types

// #region tsl_codec types
type TlsVecU8<T> = T[];
type TlsVecU16<T> = T[];
type TlsVecU24<T> = T[];
type TlsVecU32<T> = T[];

type TlsByteVecU8 = Uint8Array;
type TlsByteVecU16 = Uint16Array;
type TlsByteVecU32 = Uint32Array;

type VLBytes = Uint8Array;

// #endregion tsl_codec types

// #region openmls types

/** (u16 enum) Mls10=1 */
type ProtocolVersion = u16;

/** DH KEM x25519 | AES-GCM 128 | SHA2-256 | Ed25519 */
type MLS_128_DHKEMX25519_AES128GCM_SHA256_Ed25519 = 0x0001;

/** DH KEM P256 | AES-GCM 128 | SHA2-256 | EcDSA P256 */
type MLS_128_DHKEMP256_AES128GCM_SHA256_P256 = 0x0002;

/** DH KEM x25519 | Chacha20Poly1305 | SHA2-256 | Ed25519 */
type MLS_128_DHKEMX25519_CHACHA20POLY1305_SHA256_Ed25519 = 0x0003;

/** DH KEM x448 | AES-GCM 256 | SHA2-512 | Ed448 */
type MLS_256_DHKEMX448_AES256GCM_SHA512_Ed448 = 0x0004;

/** DH KEM P521 | AES-GCM 256 | SHA2-512 | EcDSA P521 */
type MLS_256_DHKEMP521_AES256GCM_SHA512_P521 = 0x0005;

/** DH KEM x448 | Chacha20Poly1305 | SHA2-512 | Ed448 */
type MLS_256_DHKEMX448_CHACHA20POLY1305_SHA512_Ed448 = 0x0006;

/** DH KEM P384 | AES-GCM 256 | SHA2-384 | EcDSA P384 */
type MLS_256_DHKEMP384_AES256GCM_SHA384_P384 = 0x0007;

/** X-WING KEM draft-01 | Chacha20Poly1305 | SHA2-256 | Ed25519 */
type MLS_256_XWING_CHACHA20POLY1305_SHA256_Ed25519 = 0x004d;

/** u16 enum */
type CipherSuite =
	| MLS_128_DHKEMP256_AES128GCM_SHA256_P256
	| MLS_128_DHKEMX25519_AES128GCM_SHA256_Ed25519
	| MLS_128_DHKEMX25519_CHACHA20POLY1305_SHA256_Ed25519
	| MLS_256_DHKEMX448_AES256GCM_SHA512_Ed448
	| MLS_256_DHKEMP521_AES256GCM_SHA512_P521
	| MLS_256_DHKEMX448_CHACHA20POLY1305_SHA512_Ed448
	| MLS_256_DHKEMP384_AES256GCM_SHA384_P384
	| MLS_256_XWING_CHACHA20POLY1305_SHA256_Ed25519;

/**
 * u16 enum
 *
 * MLS Extension Types
 *
 * Copied from draft-ietf-mls-protocol-16:
 *
 * | Value            | Name                     | Message(s) | Recommended | Reference |
 * |:-----------------|:-------------------------|:-----------|:------------|:----------|
 * | 0x0000           | RESERVED                 | N/A        | N/A         | RFC XXXX  |
 * | 0x0001           | application_id           | LN         | Y           | RFC XXXX  |
 * | 0x0002           | ratchet_tree             | GI         | Y           | RFC XXXX  |
 * | 0x0003           | required_capabilities    | GC         | Y           | RFC XXXX  |
 * | 0x0004           | external_pub             | GI         | Y           | RFC XXXX  |
 * | 0x0005           | external_senders         | GC         | Y           | RFC XXXX  |
 * | 0xff00  - 0xffff | Reserved for Private Use | N/A        | N/A         | RFC XXXX  |
 *
 *  Note: OpenMLS does not provide a `Reserved` variant in [ExtensionType].
 */
type ExtensionType = u16;

/**
 * // TODO - enum with uint16 discriminant
 */
type Extension = any;

interface Extensions {
	unique: Vec<Extension>;
}

/**
 * u16 enum
 *
 * /// ## MLS Proposal Types
 *
 *  ```c
 *  // draft-ietf-mls-protocol-20
 *  // See IANA registry for registered values
 *  uint16 ProposalType;
 *  ```
 *
 *  | Value           | Name                     | R | Ext | Path | Ref      |
 *  |-----------------|--------------------------|---|-----|------|----------|
 *  | 0x0000          | RESERVED                 | - | -   | -    | RFC XXXX |
 *  | 0x0001          | add                      | Y | Y   | N    | RFC XXXX |
 *  | 0x0002          | update                   | Y | N   | Y    | RFC XXXX |
 *  | 0x0003          | remove                   | Y | Y   | Y    | RFC XXXX |
 *  | 0x0004          | psk                      | Y | Y   | N    | RFC XXXX |
 *  | 0x0005          | reinit                   | Y | Y   | N    | RFC XXXX |
 *  | 0x0006          | external_init            | Y | N   | Y    | RFC XXXX |
 *  | 0x0007          | group_context_extensions | Y | Y   | Y    | RFC XXXX |
 *  | 0x0A0A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x1A1A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x2A2A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x3A3A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x4A4A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x5A5A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x6A6A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x7A7A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x8A8A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0x9A9A          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0xAAAA          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0xBABA          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0xCACA          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0xDADA          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0xEAEA          | GREASE                   | Y | -   | -    | RFC XXXX |
 *  | 0xF000 - 0xFFFF | Reserved for Private Use | - | -   | -    | RFC XXXX |
 *
 *  # Extensions
 *
 *  | Value  | Name    | Recommended | Path Required | Reference | Notes                        |
 *  |:-------|:--------|:------------|:--------------|:----------|:-----------------------------|
 *  | 0x0008 | app_ack | Y           | Y             | RFC XXXX  | draft-ietf-mls-extensions-00 |
 *
 */
type ProposalType = u16;

interface Signature {
	value: VLBytes;
}

interface InitKey {
	key: VLBytes;
}

type SignaturePublicKey = VLBytes;

/**
 * u16 enum
 *
 * CredentialType.
 *
 * This enum contains variants for the different Credential Types.
 *
 * ```c
 * // See IANA registry for registered values
 * uint16 CredentialType;
 * ```
 *
 * **IANA Considerations**
 *
 * | Value            | Name                     | R | Ref      |
 * |:-----------------|:-------------------------|:--|:---------|
 * | 0x0000           | RESERVED                 | - | RFC XXXX |
 * | 0x0001           | basic                    | Y | RFC XXXX |
 * | 0x0002           | x509                     | Y | RFC XXXX |
 * | 0x0A0A           | GREASE                   | Y | RFC XXXX |
 * | 0x1A1A           | GREASE                   | Y | RFC XXXX |
 * | 0x2A2A           | GREASE                   | Y | RFC XXXX |
 * | 0x3A3A           | GREASE                   | Y | RFC XXXX |
 * | 0x4A4A           | GREASE                   | Y | RFC XXXX |
 * | 0x5A5A           | GREASE                   | Y | RFC XXXX |
 * | 0x6A6A           | GREASE                   | Y | RFC XXXX |
 * | 0x7A7A           | GREASE                   | Y | RFC XXXX |
 * | 0x8A8A           | GREASE                   | Y | RFC XXXX |
 * | 0x9A9A           | GREASE                   | Y | RFC XXXX |
 * | 0xAAAA           | GREASE                   | Y | RFC XXXX |
 * | 0xBABA           | GREASE                   | Y | RFC XXXX |
 * | 0xCACA           | GREASE                   | Y | RFC XXXX |
 * | 0xDADA           | GREASE                   | Y | RFC XXXX |
 * | 0xEAEA           | GREASE                   | Y | RFC XXXX |
 * | 0xF000  - 0xFFFF | Reserved for Private Use | - | RFC XXXX |
 *
 */
type CredentialType = u16;

interface MlsCredential {
	credential_type: u16;
	serialized_credential_content: VLBytes;
}

interface Capabilities {
	versions: Vec<ProtocolVersion>;
	ciphersuites: Vec<CipherSuite>;
	extensions: Vec<ExtensionType>;
	proposals: Vec<ProposalType>;
	credentials: Vec<CredentialType>;
}

interface Lifetime {
	not_before: u64;
	not_after: u64;
}

interface LeafNodeSource_KeyPackage {
	KeyPackage: Lifetime;
}

type ParentHash = VLBytes;
interface LeafNodeSource_Commit {
	Commit: ParentHash;
}

// TODO - figure out how to serialize/deserialize LeafNodeSource::Update
/** u8 enum */
type LeafNodeSource = LeafNodeSource_KeyPackage | LeafNodeSource_Commit;

interface LeafNodePayload {
	encryption_key: VLBytes;
	signature_key: SignaturePublicKey;
	credential: MlsCredential;
	capabilities: Capabilities;
	leaf_node_source: LeafNodeSource;
	extensions: Extensions;
}

interface LeafNodeIn {
	payload: LeafNodePayload;
	signature: Signature;
}

interface KeyPackageTbsIn {
	protocol_version: ProtocolVersion;
	ciphersuite: CipherSuite;
	init_key: InitKey;
	leaf_node: LeafNodeIn;
	extensions: Extensions;
}

interface KeyPackageIn {
	payload: KeyPackageTbsIn;
	signature: Signature;
}

// #endregion openmls types

// #region ds-lib types
type ClientKeyPackages = TlsVecU32<[TlsByteVecU8, KeyPackageIn]>;

interface RegisterClientRequest {
	key_packages: ClientKeyPackages;
}

// #endregion ds-lib types
