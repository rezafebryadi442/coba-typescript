"use strict";
function create(processor) {
    console.log("Berhasil dan Berjaya membuat Processor" + processor.brand);
}
const IntelCeleron = {
    brand: "intel",
    baseModel: "Celeron",
    modelName: "Aspire E1",
    clockSize: 3
};
create(IntelCeleron);
