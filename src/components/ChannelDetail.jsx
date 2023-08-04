import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos,ChannelCard} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setvideos] = useState([])

  const {id} =useParams();
  console.log(ChannelDetail,videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setvideos(data?.items));
 
  },[id])
  return (
   <Box minHeight="95vh">
    <Box>
    <div  style={{
      background:' linear-gradient(90deg, rgba(58,180,171,1) 0%, rgba(29,95,253,1) 50%, rgba(248,69,252,1) 100%)',
      zIndex:10,
      height:'300px'
        }}
    />
    <ChannelCard channelDetail={ChannelDetail}
      marginTop="-110px" />
    </Box> 
    <Box display="flex" p="2">
      <Box sx={{mr: {sm: '100px'}}} />
        <Videos videos={videos} />
      </Box>
   </Box>

  )
}

export default ChannelDetail