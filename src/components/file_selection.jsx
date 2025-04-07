import React from "react";
import ItemList from "./item_list";
import Download from "./button_download";
import SuccessBanner from "./banner_success";

export default function FileSection({
  list,
  setList,
  showMerge,
  _showDownload,
  showDownload,
  mergedFile,
  warning,
  successRef,
  mergeSuccess,
  selectRef,
}) {
  return (
    <div>
      <div style={{ backgroundColor: "#bfd7ed", paddingBottom: "10vh" }}>
        <div
          ref={selectRef}
          style={{
            paddingTop: "8vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "5vh",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              marginBottom: "2vh",
              fontSize: "56px",
              fontWeight: "bold",
              color: "#41729f",
              userSelect: "none",
            }}
          >
            Selected Files
          </div>
          <div
            style={{
              width: "80%",
              alignSelf: "center",
              height: "3px",
              backgroundColor: "#41729f",
              marginBottom: "5vh",
            }}
          />
          <ItemList list={list} setList={setList} />
        </div>

        <div
          style={{
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {showMerge && (
            <div
              onClick={_showDownload}
              style={{
                cursor: "pointer",
                width: "20%",
                fontSize: "56px",
                border: "5px solid rgb(42, 58, 87)",
                borderRadius: "50px",
                padding: "20px 150px",
                background: "#5885af",
                color: "white",
                userSelect: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              MERGE
            </div>
          )}

          {showDownload && mergedFile && (
            <div style={{ marginTop: "50px" }}>
              <Download file={mergedFile} />
            </div>
          )}

          {warning && (
            <div
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                backgroundColor: "#ffe6e6",
                color: "#c0392b",
                border: "1px solid #ffb3b3",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {warning}
            </div>
          )}

          {mergeSuccess && <SuccessBanner successRef={successRef} />}
        </div>
      </div>
    </div>
  );
}
