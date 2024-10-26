import { View } from "react-native"
import ImageCard from "./ImageCard";


export default function ImageBox({ imgObj1, imgObj2 }) {
    return (
        <View
            style={{
                flexDirection:"row"
            }}
        >
            <ImageCard
                url = {imgObj1.url}
                url2={imgObj1.url2}
            />
            {
                (imgObj2 != undefined) ?
                <ImageCard
                    url={imgObj2.url}
                    url2 = {imgObj2.url2}
                />
                :
                <></>


            }
        </View>
    )
}


