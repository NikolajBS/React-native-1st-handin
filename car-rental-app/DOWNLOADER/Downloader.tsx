//import * as RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl: string = "https://swapi.dev/api/";
let target: string = "starships/";
const finalUrl: string = baseUrl + target;

export async function Main(): Promise<void> {
    let num: string;
    let key: string;
    let data: string;

    for (let i = 1; i <= 10; i++) {
        num = i.toString();
        key = ("key" + num);
        downloadAndStoreData((finalUrl + num), key);
    }

    for (let j = 1; j <= 10; j++) {
        num = j.toString();
        key = ("key" + num);
        
        if (await getData(key) !== null) {
            console.log("\n----DATA AT: " + key + "----");
            console.log(await getData(key));
        }
    }
}

const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const storeData = async (key: string, data: JSON) => {
    try {
        const parsedJson: string = JSON.stringify(data);
        await AsyncStorage.setItem(key, parsedJson);
/*
        // Define the path to the folder where you want to store the text files
        const folderPath = `${RNFS.DocumentDirectoryPath}/Spaceships`;

        // Create the folder if it doesn't exist
        if (!RNFS.exists(folderPath)) {
            RNFS.mkdir(folderPath);
        }

        // Define the path to the text file
        const filePath = `${folderPath}/${key}.txt`;

        // Write the JSON object to the text file
        RNFS.writeFile(filePath, jsonValue, (err: any) => {
            if (err) {
                console.error(err);
            }
        });
*/
    } catch (error) {
        console.error(error);
    }
};

const getData = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.error(error);
    }
};

const deleteData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error(error);
    }
};

const downloadAndStoreData = async (url: string, key: string) => {
    const data: JSON = await fetchData(url);
    await storeData(key, data);
  };
