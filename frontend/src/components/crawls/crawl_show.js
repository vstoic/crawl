import React, { useEffect, useState } from "react";
import "../../assets/stylesheets/crawl_show.css";
import { Link } from "react-router-dom";
import GoogleMap from "../map/GoogleMapCrawl";
import CommentComposeContainer from "../comment/comment_compose_container";

function CrawlShow(props) {
  const [updatedVoteCount, setUpdatedVoteCount] = useState(0);
  const [errorBot ,setErrorBot] = useState(0)
  const [latLng , setLatLng] = useState([])
  const [buttonText , setButtonText] = useState('')
  useEffect(() => {
    const fetchData = async() => {
          await props.fetchAllVenues();
          await props.fetchCrawl(props.match.params.id);
          await props.fetchCrawlComments(props.match.params.id)
          await props.fetchUsers()
    }
   fetchData()
  }, [updatedVoteCount]);
  let crawlTitle = props.crawlsReducer?.byId?.data?.title || '';
  let crawlCategory = props.crawlsReducer?.byId?.data?.category || '';
  let crawlDescription = props.crawlsReducer?.byId?.data?.description || '';
  let crawlCost = props.crawlsReducer?.byId?.data?.cost || '';
  let crawlTime = props.crawlsReducer?.byId?.data?.time || '';
  let crawlVenues = props.crawlsReducer?.byId?.data?.venues || [];
  let crawlVotes = props.crawlsReducer?.byId?.data?.votecount || 0;
  let crawlId = props.crawlsReducer?.byId?.data?._id || '';
  let usersData = props.crawlsReducer?.byId?.data?.users || []
  let venuesMap = props.venue
  //   const { title, category, description, time } =
  //     props.crawlsReducer?.byId?.data;
  const renderForVenues = (id) => {
    let text = props.venueReducer[id]
    return text;
  };
  useEffect(()=>{
    crawlVenues.map((item)=>{
      let key=item._id
      let getVenue = renderForVenues(item)
      let obj = {
        "latitude":getVenue.latitude,
        "longitude":getVenue.longitude
      }
      setLatLng(prev=>[...prev,obj])
    })
  },[props.venue])
// console.log("PropsCheck=======>",props.comments)
  const voteBot = async () => {
    // console.log("ButtonClick")
      var check =  usersData?.find((x) => x?.user_id == props.session.user.id)
    if(check == undefined){
      let updateVoteCount = crawlVotes + 1;
      let userObj = {user_id:props.session.user.id}
      let crwlArray = usersData
      crwlArray.push(
        userObj
      )
      var crawlObj = {
        ...props.crawlsReducer?.byId?.data,
        id: crawlId,
        users:crwlArray,
        votecount: updateVoteCount,
      };
      props.updateCrawl(crawlObj);
      setUpdatedVoteCount(updateVoteCount)
      setErrorBot(1)
      setButtonText('UnVote')
    }
    else {   
      let updateVoteCount = crawlVotes - 1;
      let removeUser = await usersData.filter(
        (item) => item.user_id != props.session.user.id
      );
       var crawlObj = {
         ...props.crawlsReducer?.byId?.data,
         id: crawlId,
         users: removeUser,
         votecount: updateVoteCount,
       };
       props.updateCrawl(crawlObj);
       setUpdatedVoteCount(updateVoteCount)
      setErrorBot(2)
       setButtonText("Vote");
    }
  };
  useEffect(() => {
    var check = usersData?.find((x) => x?.user_id == props?.session?.user?.id);
    if (check == undefined) {
      setButtonText("Vote");
    } else {
      setButtonText("UnVote");
    }
  }, [props.crawlsReducer?.byId?.data]);
    return (
      <div className="main-crawl-show-container">
        <div className="crawl-show-left">
          <div className="data-container">
            {/* {errorBot == 1 ? (<p>You successfully voted</p>) : 
            errorBot == 2 ? (<p>You already voted</p>) : null} */}
            <div className="crawl-title">
              {props?.session?.user?.id && (
                <button
                  className="vote-button"
                  onClick={() => voteBot()}
                  style={{
                    backgroundColor:
                      errorBot == 1 ? "orange" : errorBot == 2 ? "white" : "white",
                  }}>
                  {buttonText}</button>
              )}{crawlTitle}</div>
              <div className="crawl-details-important">
                <div className="crawl-votes">
                  Votes: {crawlVotes}
                </div>
                <div className="crawl-cost">{crawlCost}</div>
                <div className="crawl-category">{crawlCategory}</div>
                <div className="crawl-time">Duration: {crawlTime}</div>
              </div>
            <div className="crawl-description">{crawlDescription}</div>
            <div className="crawls-venues-container">
              {crawlVenues?.map((item) => (
               
                <div key={item} className="each-venue">
                  <div className="crawl-venue-left">
                    <Link to={`/venueShow/${item}`}>
                      {renderForVenues(item).name}
                    </Link>
                    <div>{renderForVenues(item).cost}</div>
                    <div>-{renderForVenues(item).description}</div>
                  </div>
                  <div className="crawl-img-container">
                  <img
                    className="crawl-venue-image"
                    src={renderForVenues(item).image}/>
                    </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        <div className="crawl-show-right">
          <div className="crawl-show-map-container">
            <div className="crawl-show-map">
              {latLng.length > 0 && (
                <GoogleMap
                  LatLong={latLng}
                />
              )}
            </div>
          </div>
          <div className="crawl-comments-container">
            <CommentComposeContainer
              crawlId={props.match.params.id}
              comments={props.comments}
              fetchUsers={props.fetchUsers}
              users={props.users}
            />
          </div>
        </div>
      </div>
   );
}
export default CrawlShow;
