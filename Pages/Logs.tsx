import { View, Text, Alert, FlatList ,StyleSheet} from 'react-native'
import React, { useEffect,  useState } from 'react'
import api from '../Server/api';
import { Acelerometro } from '../Pages/Acelerometro';

export default function AsiganuraComponente() {

  const [postitionX, setPostitionX]= useState<number>(0);
  const [positionY, setPositionY]  = useState<number> (0);
  const [fecha, setFecha]  = useState<string> ('');
  

  const [logs, setLogs]= useState([]);


  const getLogs = async () =>{
    try {
        
        const response= await api.get('logs');
        setLogs(response.data)

    } catch (error) {
        Alert.alert('Error', 'Ocurrio un error' + error)
    }
  }

  useEffect(()=>{
        getLogs()
  }, [])

  return (
    <View style={styles.container}>
      
    <FlatList 
      data={logs}
      keyExtractor={(item:Acelerometro) => item.IdLog.toString()}
      renderItem={({item})=>(

        <View style={styles.card}>
            <Text>{ `${item.postitionX}`}</Text>
            <Text>{item.positionY}</Text>
            <Text>{item.fecha}</Text>
            
        </View>
       
      )}

      >


    </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f4f4f4',
      marginTop:10
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      marginBottom: 8,
      borderRadius: 4,
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 8,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginTop:5
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
  });