import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    caixa: {
        height: "100%"
    },
    
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        
        // .hub body {
    body: {
            margin: 0,
            padding: 0,
        },
        
        // .hub .container-fluid .section-1 .bloco-1 .header {  
        header: {
            background: 'white',
            display: flex,
            justifyContent: 'spaceBetween',
            padding: 5,
            margin: 0,
        },
        
        // .hub .container-fluid .section-1 .bloco-1 .header nav button {

        button: {
            margin: 5,
            background: 'transparent',
            color: 'black',
            outline: 0,
            border: 'none',
        },
        
        // .hub .section-principal{
        principal: {

            display:'flex',  
        },
        
        // .hub .section-user{
        user: {
            background: '6ebaed',
            width: 250,
            height: 'auto',
            // borderRadius: 0px 0px 16px 0px; (Coloca-se separado)
            display: 'flex',
            justifyContent: 'center',
            // padding: 16px 0px;    
        },
        
        // .hub .section-user .inf-user {
        infUser: {

            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        },
        
        // .hub .section-user .inf-user .foto-user {
        fotoUser: {

            background: 'white',
            width: 120,
            height: 120,
            borderRadius: 60,
            display:'flex',
            justifyContent: 'center',
        },
        
        // .hub .section-user .inf-user .foto-user img {
        fotoUserImg: {

            width: 120,
            height: 120,
            display: 'flex',
            justifyContent: 'center',
        },
        
        // .hub .section-user .inf-user .name-user {
        nameUser: {
        
            background: 'FF4D00',
            width: 180,
            height: 'auto',
            color: 'white',
            // margin: 0px 0px 16px 0px;
            borderRadius: 8, 
        },
        
        // .hub .section-user .inf-user p{
        p: {
            margin:0,
            fontWeight: 900,
        },
        
        // .hub .section-user .inf-user .pontos {
          pontos: {  
            background: 'white',
            color: '1CA8C9',
            width:180,
            height: 90,
            borderRadius: 12,
            margin: 8,
            // display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 'bolder',
            fontSize: 16,
            textTransform: 'uppercase',
        },
        
        // .hub .section-user .inf-user .atividades {
        atividades: {

            background: 'white',
            color: '1CA8C9',
            width:180,
            height: 90,
            borderRadius: 12,
            margin: 8,
            // display: flex
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 'bolder',
            fontSize: 16,
            textTransform: 'uppercase',
        },
        
        // .hub .section-user .inf-user .anuncios {

        anuncios: {

            background: 'white',
            color: '1CA8C9',
            width:180,
            height: 90,
            borderRadius: 12,
            margin: 8,
            // display: flex,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: center,
            fontWeight: bolder,
            fontSize: 20,
            textTransform: 'uppercase',
        },
        
        
        
        // .hub .section-user .experiencia  li{
            li: {    
            fontSize: 'large',
            fontWeight: 700,
        },
        
        // .hub .btns {
        btns: {    
            // display: flex;
            flexDirection: 'column',
            justifyContent: 'spaceBetween',
        },
        
        // .hub .btns .btn {
        btnsBtn: {
            color: 'white',
            background: '1CA8C9',
            marginTop: 10,
            textTransform: 'uppercase',
            fontWeight: 600,
        },
        
        // .hub .conteudo {
        conteudo: {    
            height: 500,
            // display: flex;
            justifyContent: 'spaceBetween',
            alignItems: 'center',
            flexDirection: 'column',
            height:'auto',
            width:'100%',
            paddingTop: 80,
        },
        
        // .hub .conteudo .cursos{
        cursos: {

            background: 'fff',
            width: 650,
            borderRadius: 20,
        },
        
        // .hub .conteudo .cursos img{
        cursosImg: {   
            width: 400,
            height: 350,
        },
        
        // .hub .conteudo .carousel-item h5 {
        h5: {
            color: 'black',
            fontWeight: 800,
        },
        
        // .hub .conteudo .carousel-item p{
        carouselp: {   
            color: 'hsl(0, 0%, 0%)',
            fontSize: 18,
            fontWeight: 600,
        },
        
        // .hub .conteudo .propaganda {
        propaganda: {
            background:'6EBAED',
            margin-bottom: 100,
        },
        
}),

export default styles;