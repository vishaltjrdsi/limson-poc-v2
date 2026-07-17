const trackingInfoFields = [
  [
    { label: "ISSUE DATE", name: "issueDate", type: "date" },
    { label: "DATE PO CONFIRM VEND", name: "confirmVendorDate", type: "date" },
    { label: "ORIGINAL DEP DATE", name: "originalDepartureDate", type: "date" },
    { label: "ACTUAL DEP DATE", name: "actualDepartureDate", type: "date" },
    { label: "CONT PORT DUE DATE", name: "containerPortDueDate", type: "date" },
    { label: "FINAL DEST ETA", name: "finalDestinationEta", type: "date" },
  ],

  [
    { label: "SHIPPING LINE", name: "shippingLine" },
    { label: "BL #", name: "blNumber" },
    { label: "VESSEL NAME", name: "vesselName" },
    { label: "VOYAGE #", name: "voyageNumber" },
    { label: "CONTAINER #", name: "containerNumber" },
    { label: "SEAL #", name: "sealNumber" },
  ],

  [
    { label: "BOL TRACKING #", name: "bolTracking" },
    { label: "BL REC DATE", name: "blReceivedDate", type: "date" },
    { label: "FEEDER VESSEL", name: "feederVessel" },
    { label: "BOL SENT TO CHB DATE", name: "bolSentDate", type: "date" },
    { label: "CHB ENTRY #", name: "chbEntryNumber" },
    { label: "EXECUTION DATE", name: "executionDate", type: "date" },
  ],

  [
    { label: "MEAT CERT TRACK #", name: "meatCertificateTracking" },
    { label: "PALLETS USED", name: "palletsUsed" },
    { label: "DOX COVER SHEET", name: "doxCoverSheet" },
    { label: "BROKER REF #", name: "brokerReference" },
    { label: "CUSTOMS RELEASE NO", name: "customsReleaseNumber" },
    { label: "ESTIMATED DEP DATE", name: "estimatedDepartureDate", type: "date" },
  ],

  [
    { label: "VENDOR SO #", name: "vendorSo" },
    { label: "PO CONFIRMATION (SO)", name: "poConfirmation" },
    { label: "NETPO UPDATE", name: "netpoUpdate", type: "date" },
    { label: "VENDOR RELEASE #", name: "vendorRelease" },
    { label: "ORIGINAL ETA", name: "originalEta", type: "date" },
    { label: "CUSTOM FIELD 4", name: "customField4" },
  ],

  [
    { label: "WHSE REC DATE", name: "warehouseReceivedDate", type: "date" },
    { label: "VENDOR INVOICE #", name: "vendorInvoice" },
    { label: "INVOICE DATE", name: "invoiceDate", type: "date" },
    { label: "INV PROCESS DATE", name: "invoiceProcessDate" },
    { label: "AP DESCRIPTION (CANOPY)", name: "apDescription" },
    { label: "", name: "blank1" },
  ],

  [
    { label: "TELEX RELEASE", name: "telexRelease", type: "date" },
    { label: "ARRIVAL NOTICE", name: "arrivalNotice", type: "date" },
    { label: "DO SENT", name: "doSent", type: "date" },
    { label: "DO RECEIVED", name: "doReceived", type: "date" },
    { label: "CUSTOMS CLEARANCE", name: "customsClearance", type: "date" },
    { label: "FDA MAY PROCEED", name: "fdaMayProceed", type: "date" },
  ],

  [
    { label: "LAST DAY DEMURRAGE", name: "lastDayDemurrage", type: "date" },
    { label: "LAST DAY DETENTION", name: "lastDayDetention", type: "date" },
    { label: "PICK UP NUMBER", name: "pickupNumber" },
    { label: "INSPECTION DATE", name: "inspectionDate", type: "date" },
    { label: "EMPTY RETURNED", name: "emptyReturned", type: "date" },
    { label: "PAYMENT DUE", name: "paymentDue", type: "date" },
  ],
];

export default trackingInfoFields;