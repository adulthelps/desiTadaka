import React, { useState } from "react";
import "./details.scss";
import {  useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/reducer/combineReducer";
import YouTubePlayer from "./youtubeVideo";
import { IData } from "../Redux/reducer/collectionList";

export const DetailItem: React.FC = () => {
  const [lang, setLang] = useState<string>("english");
  const data = useSelector((state: RootState) => state.reducers.CollectionData);
  const { id } = useParams<{ id: string }>();
  console.log("params id is ", id);
  let dis: string = "";
  let link: string = "";
  let watches: boolean = false;
  let value: IData[] = [];

  const videoId = extractVideoId("https://www.youtube.com/shorts/0cp0B8jG5BQ");

  return (
    <div className="containers">
      <div className="announce">
        <h1>
          All content I upload is available on the internet. I don't intend
          harm. If you have concerns, contact me, and I'll promptly remove the
          content in question.
        </h1>
      </div>
      <div className="dashboards">
        {data
          .filter((val) => val.id === parseInt(id!))
          .map((val) => {
            value.push(val);
            const styles = {
              backgroundImage: `url(${val.image})`,
              backgroundClip: "text",
              color: "transparent",
            };
            link = val.link;
            dis = val.body.description;
            if (val.body.watch) {
              watches = true;
            }
            return (
              <div className="detail-container" key={val.id + 1}>
                <img src={val.image} alt="img" />
                <p className="para" style={styles}>
                  {val.body.name}
                </p>
              </div>
            );
          })}
      </div>
      {!watches && <div className="download">
        <p className="heading-download">How To Download</p>
        <div className="language">
          <div className="lang">
            <button
              className={`btn english ${lang === "english" ? "active" : ""}`}
              onClick={() => setLang("english")}
            >
              English
            </button>
            <button
              className={`btn hindi ${lang === "hindi" ? "active" : ""}`}
              onClick={() => setLang("hindi")}
            >
              Hindi
            </button>
          </div>
          <div className="description">
            {lang === "english" ? (
              <p className="desc E">
                To access the full library of videos on TeraBox, simply click on
                the "Join" button, which will direct you to the official TeraBox
                website. From there, you can seamlessly sign up using your
                Google ID. Once you've completed the sign-up process, you'll
                gain access to download and watch all the available videos on
                TeraBox.
              </p>
            ) : (
              <p className="desc H">
                "TeraBox" की आधिकारिक वेबसाइट पर जाने के लिए, कृपया "Join" बटन
                पर क्लिक करें। यह आपको "TeraBox" की आधिकारिक वेबसाइट पर
                रीडायरेक्ट करेगा। वहां, अपनी Google ID का उपयोग करके साइन अप
                करें। साइन अप प्रक्रिया पूरी करने के बाद, आपको "TeraBox" पर
                उपलब्ध सभी वीडियो को डाउनलोड और देखने की सुविधा मिलेगी।
              </p>
            )}
          </div>
          <YouTubePlayer videoId={videoId} />
          <div className="joins">
            <button
              onClick={() =>
                window.open(
                  "https://www.1024terabox.com/webmaster?referer_uk=4400458033769"
                )
              }
              className="join"
            >
              Join
            </button>
          </div>
        </div>
      </div>}
      <div className="videos">
        <div className="videoDesc">
          <h2>Plot : </h2>
          <p className="descriptions">{dis}</p>
          <p className="tip">
            For Download this video please click the Download buttons
          </p>
        </div>
        {watches ? (
          <button
            onClick={() => window.open(link)}
            className="download-button"
          >
            Get Link
          </button>
        ) : (
          <button onClick={() => window.open(link)} className="download-button">
            download
          </button>
        )}
      </div>
    </div>
  );
};

function extractVideoId(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^/]+\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
  );

  return match ? match[1] : "";
}
