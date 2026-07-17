function TrackingNotes() {
  return (
    <>
      <div className="tracking-notes">

        <div className="tracking-notes-title">
          NOTES ON THIS ORDER (FOR REFERENCE ONLY, NOT PRINTED)
        </div>

        <textarea rows={5} />

      </div>

      <div className="tracking-notes">

        <div className="tracking-notes-title">
          SPECIAL INSTRUCTIONS (PRINTED ON PURCHASE ORDER)
        </div>

        <textarea
          rows={5}
          defaultValue="None"
        />

      </div>
    </>
  );
}

export default TrackingNotes;