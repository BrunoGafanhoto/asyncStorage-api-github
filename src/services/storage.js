import AsyncStorage from '@react-native-async-storage/async-storage';


export const getAllRepositories = async(key) => {
    const stored = await AsyncStorage.getItem(key);

    let repositoriesSave = JSON.parse(stored) || []
    
    return repositoriesSave;

}

let repositoriesSaved = [];
export async function saveRepository(key, value){
    
    try{

         repositoriesSaved = await getAllRepositories(key);
       
      
        const hasRepository = repositoriesSaved.some(item => item.id == value.id)
        
        if(hasRepository){
            console.log('esse repositorio ja foi salvo')
            return
        }
        repositoriesSaved.push(value);
       
      
       await AsyncStorage.setItem(key, JSON.stringify(repositoriesSaved) );
     
    }
    catch(e){
        console.log(e.message);
    }
}