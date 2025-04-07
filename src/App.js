import "./styles.css";
import React, { useState, useRef } from "react";
import ItemList from "./components/item_list";
import Download from "./components/button_download";
import { merge } from "./handle_pdf";
import FileSelector from "./components/file_selector";
import FileSection from "./components/file_selection";
import SuccessBanner from "./components/banner_success";

export default function App() {
  const [list, setList] = useState([]);
  const [fileMap, setFileMap] = useState(new Map());
  const [mergedFile, setMergedFile] = useState(null);
  const [showDownload, setShowDownload] = useState(false);
  const [warning, setWarning] = useState("");
  const [mergeSuccess, setMergeSuccess] = useState(false);

  const inputRef = useRef(null);
  const successRef = useRef(null);
  const selectRef = useRef(null);

  const showMerge = list.length > 1;
  const showList = list.length > 0;

  const _showDownload = async () => {
    if (list.length === 0) {
      setWarning("⚠️ No file selected. Please choose a file.");
      return;
    }

    const orderedFiles = list
      .map((item) => fileMap.get(item.name))
      .filter(Boolean);

    if (orderedFiles.length === 0) {
      setWarning("❌ Could not find matching files to merge.");
      return;
    }

    setWarning("");
    setMergeSuccess(false);

    const result = await merge(orderedFiles);
    setMergedFile(result);
    setShowDownload(true);

    setMergeSuccess(true);

    setTimeout(() => setMergeSuccess(false), 3000);
    setTimeout(() => {
      successRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length === 0) {
      setWarning("⚠️ No file selected. Please choose a file.");
      return;
    }

    setWarning("");

    const newFileMap = new Map(fileMap);
    selectedFiles.forEach((file) => newFileMap.set(file.name, file));
    setFileMap(newFileMap);

    const newItems = selectedFiles.map((file, index) => ({
      id: list.length + index + 1,
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    setList((prev) => [...prev, ...newItems]);

    setTimeout(() => {
      selectRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FileSelector inputRef={inputRef} handleClick={() => inputRef.current.click()} handleFilesChange={handleFilesChange} />

      {showList && (
        <FileSection
          list={list}
          setList={setList}
          showMerge={showMerge}
          _showDownload={_showDownload}
          showDownload={showDownload}
          mergedFile={mergedFile}
          warning={warning}
          successRef={successRef}
          mergeSuccess={mergeSuccess}
          selectRef={selectRef}
        />
      )}
    </div>
  );
}
