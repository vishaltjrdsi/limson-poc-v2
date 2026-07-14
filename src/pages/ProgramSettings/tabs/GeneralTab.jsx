import DynamicForm from "../../../components/common/DynamicForm/DynamicForm";
import programSettingsForm from "../../../config/forms/programSettingsForm";

function GeneralTab({
    formData,
    handleChange,
}) {

    return (

        <DynamicForm
            fields={programSettingsForm}
            values={formData}
            onChange={handleChange}
        />

    );

}

export default GeneralTab;