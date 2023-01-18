const PTD = {
    localCsvWHeader: e => {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            console.log('The File APIs are not fully supported in this browser.');
            return;
        }
        const file = e.target.files[0];
        if (file.size > 5000000) {
            console.log("file too large");
        }
        const r = new FileReader();
        r.readAsText(file);
        r.onload = function () {
            let finalData = [];
            let rows;
            const rawRows = r.result.split("\r");
            if (rawRows.length > 1) {
                console.log("split at comma")
                rows = rawRows.map(item => item.split(","));
            } else {
                console.log("split new line")
                let tempArr = rawRows[0].split("\n")
                rows = tempArr.map(item => item.split(","))
            }
            const header = rows[0]
            const data = rows.splice(1, rows.length - 1);
            finalData = data.map((d, i) => {
                let keys = {};
                header.forEach((item, j) => keys[item] = data[i][j])
                return keys;
            });
            console.log(finalData);
            return finalData;
        }
        r.onerror = function () {
            console.log(r.error);
        }
    },
    localCsvWithoutHeader: e => {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            console.log('The File APIs are not fully supported in this browser.');
            return;
        }
        const file = e.target.files[0];
        if (file.size > 5000000) {
            alert("File too large")
            return
        };
        const r = new FileReader();
        r.readAsText(file);
        r.onload = function () {
            let rows;
            const rawRows = r.result.split("\r");
            if (rawRows.length > 1) {
                rows = rawRows.map(item => item.split(","));
            } else {
                let tempArr = rawRows[0].split("\n")
                rows = tempArr.map(item => item.split(","))
            }
            // const link = document.createElement("a");
            // const blob = new Blob([rows], { type: "text/plain" });
            // link.href = URL.createObjectURL(blob);
            // link.download = "pnb.txt";
            // link.click();
            // URL.revokeObjectURL(link.href);
            // localStorage.setItem("PTD_DATA", JSON.stringify(rows))
            console.log(rows);
        }
        r.onerror = function () {
            console.log(r.error);
        }
    },
    getRemoteCsv: async url => {

    },
}
export default PTD