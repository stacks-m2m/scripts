(impl-trait '<%= it.extension_trait %>)
(impl-trait '<%= it.action_trait %>)

(define-constant ERR_UNAUTHORIZED (err u10001))
(define-constant ERR_INVALID_PARAMS (err u10002))

(define-public (callback (sender principal) (memo (buff 34))) (ok true))

(define-public (run (parameters (buff 2048)))
  (begin
    (try! (is-dao-or-extension))
    (contract-call? .aibtc-onchain-messaging send (unwrap! (from-consensus-buff? (string-ascii 2043) parameters) ERR_INVALID_PARAMS) true)
  )
)

(define-private (is-dao-or-extension)
  (ok (asserts! (or (is-eq tx-sender '<%= it.dao_contract_address %>)
    (contract-call? '<%= it.dao_contract_address %> is-extension contract-caller)) ERR_NOT_DAO_OR_EXTENSION
  ))
)