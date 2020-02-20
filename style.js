import { StyleSheet, TouchableWithoutFeedback } from "react-native";

export default StyleSheet.create({
    right_side: {
        flex: 2,
      },
    
      left_side: {
        flex: 5 
      },
    
      header: {
        flex: 0.25, 
        backgroundColor: 'white',
        justifyContent: "center",
      
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        
      },
    
      classroomMapping: {
        flex: 3.5, 
        backgroundColor: 'skyblue',
       
        justifyContent: 'center',
        paddingTop: 60,
        alignItems: 'center'
      },
      comment_box: {
       
        backgroundColor: "white",
     
        paddingVertical: 15,
        marginBottom: 30,
        width: '60%',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 100,
        margin:10
      },
      classroom_name: {
          fontSize: 30,
          color: "black",
          fontWeight: "bold",
          paddingTop: 20,
      },
    
      alert_bar: {
        color: 'white',
        // grid-column-start: 2,
        // grid-column-end:3,
        // height: '20px',
        borderRadius: 20,
        overflow: "hidden",
        width: "20%",
        padding: 10,
        backgroundColor: '#22AD1E',
        position: 'relative',
        display: 'flex',
        alignItems: "center",
        /* IE10 */
        
        /* padding: 0 8px; */
        // -webkit-box-align: center,
        // grid-auto-columns: 1fr,
        /* grid-auto-columns: 1fr; */
        // grid-template-columns: 1fr 2fr, 
        /* align-self: center;  */
        // grid-column-gap: 0px,
        // grid-row-gap: 30px,
        // margin-top: 10%,
        textAlign: 'right',
        // width: 100%,
      },

      alert_bar2: {
        borderRadius: 20,
        color: 'white',
        // grid-column-start: 2,
        // grid-column-end:3,
        // height: '20px',
        padding: 10,
        width: "80%",
        backgroundColor: '#3CCE3C',
        position: 'relative',
        display: 'flex',
        alignItems: "center",
        /* IE10 */
        overflow: "hidden",
        /* padding: 0 8px; */
        // -webkit-box-align: center,
        // grid-auto-columns: 1fr,
        /* grid-auto-columns: 1fr; */
        // grid-template-columns: 1fr 2fr, 
        /* align-self: center;  */
        // grid-column-gap: 0px,
        // grid-row-gap: 30px,
        // margin-top: 10%,
        textAlign: 'center',
        // width: 100%,
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
      commentButton:{
        backgroundColor:'#232323',
        marginBottom: 30,
        
        width:70,
        borderRadius:100,
        margin:10,
        alignItems: 'center',
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
