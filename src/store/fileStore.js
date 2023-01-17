import React from 'react';

const FileContext = React.createContext({
    title: "",
    setTitle: () => { },
    cells: [],
    setCells: () => { },
    msg: "",
    setMsg: () => { },
});

export default FileContext;