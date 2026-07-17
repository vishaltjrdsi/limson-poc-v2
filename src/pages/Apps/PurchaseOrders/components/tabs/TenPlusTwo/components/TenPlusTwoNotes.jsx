import tenPlusTwoData from "../tenPlusTwoData";

function TenPlusTwoNotes() {
  return (
    <div className="tenplus2-notes">
      <div className="tenplus2-notes-title">
        NOTES
      </div>

      <textarea
        defaultValue={tenPlusTwoData.notes}
      />
    </div>
  );
}

export default TenPlusTwoNotes;