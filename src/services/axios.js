import { apiurl } from './config/apiurl';


export const AxiosFiles = async (path, sFileName, data) => {
    await axios({
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Company-Token": `${localJwtKey}`,
            Authorization: `Bearer `,
        },
        url: apiurl + path,
        method: "POST",
        data: data || {},
        responseType: "blob",
    })
        .then((response) => {

            var blob = new Blob([response.data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            let fileName = sFileName || "";
            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, fileName);
            } else {
                const link = document.createElement("a");
                link.target = "_blank";
                var objectUrl = URL.createObjectURL(blob);
                link.href = objectUrl;
                link.setAttribute("download", fileName);
                link.setAttribute("visibility", "hidden");
                link.click();
                link.remove();

            }

        })
        .catch((error) => console.log("error"));

    return true
};

export const AxiosFilesPDF = async (path, sFileName, data) => {
    await axios({
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Company-Token": `${localJwtKey}`,
            Authorization: `Bearer `,
        },
        url: apiurl + path,
        method: "POST",
        data: data || {},
        responseType: "blob",
    })
        .then((response) => {

            var blob = new Blob([response.data], {
                type: "application/pdf",
            });
            let fileName = sFileName || "";
            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, fileName);
            } else {
                const link = document.createElement("a");
                link.target = "_blank";
                var objectUrl = URL.createObjectURL(blob);
                link.href = objectUrl;
                link.setAttribute("download", fileName);
                link.setAttribute("visibility", "hidden");
                link.click();
                link.remove();

            }

        })
        .catch((error) => console.log("error"));

    return true
};
