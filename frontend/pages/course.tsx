import { useEffect, useState } from "react";
import Jdenticon from "react-jdenticon";
import {
  getVideoDetails,
  getVideoSignedUrl,
} from "../services/api-services/creator/video_api";
import Router, { useRouter } from "next/router";
import queryString from "query-string";
import Head from "next/head";
import AuthService from "../services/auth-services";
import { getSpecificUserData } from "../services/api-services/user_api";
import Image from "next/image";
import VideosSeriesGating from "../components/VideosSeriesGating";
import CreatorDP from "../components/CreatorDP";
import { useScreenSize } from "../services/utility";
import { CircularProgress } from "@mui/material";
import loading from "../public/loadingCrezalo.gif";
import { clickEvent } from "../services/analytics";

export default function Course() {
  const router = useRouter();
  let { courseid } = router.query;

  if (!courseid) {
    const url = router.asPath;
    courseid = queryString.parseUrl(url).query.courseid;
  }

  var [signedURl, setSignedURl] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          console.log(await AuthService.refresh());
          setIsConnected(
            AuthService.validateCurrentUserRefreshToken() &&
              AuthService.validateCurrentUserAccessToken()
          );
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const updateUsername = () => {
    useEffect(() => {
      setUsername(AuthService.getUsername());
    }, [isConnected]);
  };

  updateUsername();

  const GetVideoUrl = () => {
    useEffect(() => {
      async function getData() {
        if (courseid) {
          const result = await getVideoSignedUrl(courseid.toString());
          setSignedURl(result[0]["signedurl"]);
        }
      }
      getData();
    }, [username]);
  };

  GetVideoUrl();

  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    creator: "",
  });

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        if (courseid) {
          const result = await getVideoDetails(courseid.toString());
          setVideoDetails(result[0]);
        }
      }
      getData();
    }, [username]);
  };

  GetDetails();

  return (
    <div>
      <Head>
        <title>
          {videoDetails?.title ? videoDetails?.title : "Crezalo: Course"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ backgroundColor: "black" }}>
        {isConnected && signedURl ? (
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="videoDiv" id="DemoVideoAndCourseInfo">
                <div
                  style={{
                    flexDirection: ismobile ? "column" : "row",
                    display: "flex",
                  }}
                >
                  <div>
                    <video
                      controls
                      autoPlay
                      crossOrigin="anonymous"
                      controlsList="nodownload"
                      style={{
                        height: ismobile ? "60vw" : "35vh",
                        width: ismobile ? "90vw" : "35vw",
                        borderRadius: "5%",
                      }}
                    >
                      <source src={signedURl} type="video/mp4" />
                      {/* <track
              label="English"
              kind="captions"
              srcLang="en"
              src={VIDEO_API_URL + "captions/" + courseid}
              default
            /> */}
                    </video>
                  </div>
                  <div
                    style={{
                      margin: ismobile ? "5px" : "2vh 10vw 10vh 10vw",
                      maxWidth: ismobile ? "100vw" : "50vw",
                    }}
                  >
                    <h1 className="videoDiv h1">{videoDetails.title}</h1>
                    <div
                      onClick={() => {
                        Router.push({
                          pathname: "/creatorprofile",
                          query: {
                            address: videoDetails.creator,
                          },
                        });
                        clickEvent("RedirectToCreatorProfile");
                      }}
                      className="creatorIdent pointer"
                    >
                      <div className="creatorImageMinor">
                        <CreatorDP
                          creator={videoDetails.creator}
                          height={50}
                          width={50}
                        />
                      </div>
                      <h2 className="VideoDiv h2">{videoDetails.creator}</h2>
                    </div>
                    <h1 className="VideoDiv p">{videoDetails.description}</h1>
                  </div>
                </div>
                <VideosSeriesGating
                  creator={videoDetails.creator}
                  onCreatorProfile={false}
                  category="SeriesVideoGrid"
                  seriesid={courseid.toString()}
                  onVideoPlayer={false}
                  onCoursePage={true}
                />
              </div>
            </div>
          </>
        ) : (
          // <CircularProgress
          //   style={{
          //     display: "flex",
          //     margin: "auto",
          //     height: "80vh",
          //   }}
          // />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "30vh",
              height: "100vh",
              width: "100vw",
            }}
          >
            <Image
              src={loading}
              height="150"
              width="150"
              alt={""}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
