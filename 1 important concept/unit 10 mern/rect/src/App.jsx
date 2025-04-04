import { useReducer, useState } from 'react';
import './App.css';
import AddVideo from './component/AddVideo';
import videoDB from './data/data';
import VideoList from './component/videoList';

function App() {
  console.log('render App');
  
  const [editableVideo, setEditableVideo] = useState(null);

  // Reducer function for managing video state
  function videoReducer(videos, action) {
    switch(action.type) {
      case 'ADD':
        return [
          ...videos,
          { ...action.payload, id: videos.length + 1 }
        ];
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;  
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  // Function to set a video for editing
  function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id));
  }

  return (
    <div className="App" onClick={() => console.log('App')}>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
      <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos} />
    </div>
  );
}

export default App;
