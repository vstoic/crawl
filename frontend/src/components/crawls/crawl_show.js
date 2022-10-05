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
          await  props.fetchCrawl(props.match.params.id);
          await props.fetchCrawlComments(props.match.params.id)
          await props.fetchUsers()
    }
   fetchData()
  }, [updatedVoteCount]);

  
  const crawlTitle = props.crawlsReducer?.byId?.data?.title || '';
  const crawlCategory = props.crawlsReducer?.byId?.data?.category || '';
  const crawlDescription = props.crawlsReducer?.byId?.data?.description || '';
  const crawlCost = props.crawlsReducer?.byId?.data?.cost || '';
  const crawlTime = props.crawlsReducer?.byId?.data?.time || '';
  const crawlVenues = props.crawlsReducer?.byId?.data?.venues || [];
  




  var crawlVotes = props.crawlsReducer?.byId?.data?.votecount || 0;
  var crawlId = props.crawlsReducer?.byId?.data?._id || '';
  var usersData = props.crawlsReducer?.byId?.data?.users || []
var venuesMap = props.venue
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
console.log("PropsCheck=======>",props.comments)
  const voteBot = async () => {
    console.log("ButtonClick")
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
      var removeUser = await usersData.filter(
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
           <div className="crawl-votes"> {crawlVotes}
           {props?.session?.user?.id && (
           <button
             className="button"
             id="vote-button"
             onClick={() => voteBot()}
             style={{
               backgroundColor:
                 errorBot == 1 ? "green" : errorBot == 2 ? "red" : "grey",
             }}
           >
             {buttonText}
           </button>
         )}
           </div>
           {errorBot == 1 ? (
           <p>You successfully voted</p>
         ) : errorBot == 2 ? (
           <p>You already voted</p>
         ) : null}
           <div className="crawl-title">{crawlTitle}</div>
           <div className="crawl-details-important">
             <div className="crawl-cost">{crawlCost}</div>
             <div className="crawl-category">{crawlCategory}</div>
             <div className="crawl-time">Duration: {crawlTime}</div>
           </div>

           <div className="crawl-description">{crawlDescription}</div>

           <div className="crawls-venues-container">
             {crawlVenues?.map((item) => (
               <div key={item._id} className="each-crawl">
                 <div className="">
                   <Link to={`/venueShow/${item}`}>
                     {renderForVenues(item).name}
                   </Link>
                   <div>{renderForVenues(item).cost}</div>
                   <div>-{renderForVenues(item).description}</div>
                 </div>
                 <img
                   className="crawl-venue-image"
                   src={renderForVenues(item).image}
                 />
               </div>
             ))}
           </div>
         </div>
         <div className="crawl-comments-container">
           <p>comments-container</p>
           <CommentComposeContainer 
             crawlId={props.match.params.id}
             comments={props.comments}
             fetchUsers={props.fetchUsers}
             users={props.users}
           />
         
        

         </div>

       </div>

       <div className="crawl-show-right">
         <div className="crawl-show-map-container">
           <div className="crawl-show-map">
             {latLng.length > 0 && (
               <GoogleMap
                 // venueLat={-43.2142}
                 // venueLong={79.2342142}
                 LatLong={latLng}
               />
             )}
           </div>
          

         </div>
         

        
       </div>
     </div>
     
   );
}

export default CrawlShow;
