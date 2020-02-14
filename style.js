import { StyleSheet } from "react-native";

export default StyleSheet.create({
    right_side: {
        flex: 2,
      },
    
      left_side: {
        flex: 5 
      },
    
      header: {
        flex: 0.5, 
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        paddingTop: 60,
        alignItems: 'center'
      },
    
      classroomMapping: {
        flex: 3.5, 
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        paddingTop: 60,
        alignItems: 'center'
      },
    
      bottom: {
        flex: 1, 
        flexDirection:'row',
        backgroundColor: 'steelblue',
        justifyContent: 'flex-start',
        paddingTop: 30,
        alignItems: 'center'
      },
    
    
    
      controlButtonText: {
        textAlign: 'center',
        paddingVertical: 15,
        color: 'white',
        fontWeight:"bold",
        fontSize:15
      },
    
      activityButtonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white'
      },
    
    
      //Big, oval button for play, stop video
      controlButton:{
        marginBottom: 30,
        width: 120,
        alignItems: 'center',
        backgroundColor: '#232323',
        borderRadius: 100,
        margin:10
      },  
    
      //Small, oval side button for instance activity 
      instanceButton:{
        backgroundColor:'#232323',
        height: 35,
        width:120,
        borderRadius:100,
        margin:10
      },
    
      //Small, oval side button for durational activity 
      durationalButton:{
        backgroundColor:'#232323',
        height: 35,
        borderRadius:100,
      },
    
      //Instrctor/student activity dropdown menu
      activityButton:{
        marginBottom: 10,
        width: 160,
        alignItems: 'center',
        backgroundColor: '#3B769C',
        borderRadius: 100,
      },  
    
    
      menuContent: {
        color: "#000",
        fontWeight: "bold",
        padding: 1,
        fontSize: 15
      }


});
