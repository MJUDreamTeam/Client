import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import CameraScreen from "./CameraScreen";

const AddMediaNavigator = createStackNavigator({
    Library: {screen: LibraryScreen},
    Camera: {screen: CameraScreen},
    Video: {screen: VideoScreen}
});

export default createAppContainer(AddMediaNavigator);
