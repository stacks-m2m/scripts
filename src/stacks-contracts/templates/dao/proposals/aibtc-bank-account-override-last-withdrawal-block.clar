(impl-trait '<%= it.proposals_trait %>)

(define-public (execute (sender principal))
  (contract-call? .aibtc-bank-account override-last-withdrawal-block burn-block-height)
)
