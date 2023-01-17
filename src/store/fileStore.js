import React from 'react';

const FileContext = React.createContext({
    title: "Untitled",
    setTitle: () => { },
    cells: [],
    setCells: () => { },
    msg: "",
    setMsg: () => { },
});

export default FileContext;