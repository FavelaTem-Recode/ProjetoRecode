import { StyleSheet } from 'react-native',

const styles = StyleSheet.create({
    
    // .page-servicos body, html {
    pageservicos: {

        margin: 0,
        padding: 0,
    },
    
    // .page-servicos .container-fluid .section-1 .bloco-1 .header {
    header: {

        background: 'white',
        display: 'flex',
        justifyContent: 'spaceBetween',
        padding: 5,
        margin: 0,
    },
    
    // .page-servicos .container-fluid .section-1 .bloco-1 .header nav button {
        navbutton: {

        margin: 5,
        background: 'transparent',
        color: 'black',
        outline: 0,
        border: 'none',
    },
    
    // .page-servicos .container-fluid .section-2 {
    section2: {

        background: FF4D00,
        width: "100%",
        margin: 0,
        padding: 10,
                
    },
    
    // .page-servicos .container-fluid .section-2 .navbar li {
    navbarli: {

        background: 'transparent',
    },
    
    // .page-servicos .container-fluid .section-2 .navbar button{
    navbarbutton: {

        margin: 5,
        background: 'transparent',
        outline: 0,
        border: 'none',
        color: 'white',
        margin: 0,
        padding: 0,
        height: 60,
    },
    
    // .page-servicos .container-fluid .section-2 .navbar  img {
    navbarimg: {

        width: 36,
        height: 36,
    },
    
    // .page-servicos .section-3{
    section3: {

        display: 'flex', 
    },
    
    // .page-servicos .section-3 .filtro aside {
    filtroaside: {

        // backgroundcolor: #1CA8C9,
        width: 350,
        height: 300,
        // border: #1CA8C9,
        // border-radius: 0px 0px 16px 0px ;
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
    },
    
    // .page-servicos .section-3 .filtro aside ul {
    ul: {

        padding: 0,
        margin: 50,
    },
    
    // .page-servicos .section-3 .filtro aside ul select {
    select: {

        height: 40,
    },
    
    // .page-servicos .section-3 .filtro aside ul .cleanFilter {
    cleanFilter: {

        height: 40,
        background: FF4D00,
        color: ffffff,
    },

    // .page-servicos .section-3 .servicos{
    servicos: {

        display: 'block',
        textAlign: 'center',
    },
    
    // .page-servicos .section-3 .servicos .pesquisa{
    pesquisa: {

        display: 'flex',
//         flex#
// No React Native flexnão funciona da mesma forma que no CSS. flexé um número em vez de uma string e funciona de acordo com o mecanismo de layout do Yoga .

// Quando flexé um número positivo, torna o componente flexível e será dimensionado proporcionalmente ao seu valor flexível. Portanto, um componente flexdefinido como 2 ocupará o dobro do espaço que um componente flexdefinido como 1. é flex: <positive number>igual a flexGrow: <positive number>, flexShrink: 1, flexBasis: 0.

// Quando flexé 0, o componente é dimensionado de acordo com widthe height, e é inflexível.

// Quando flexé -1, o componente é normalmente dimensionado de acordo com widthe height. No entanto, se não houver espaço suficiente, o componente encolherá para seu minWidthe minHeight.

// flexGrow,, flexShrinke flexBasisfuncionam da mesma forma que em CSS.
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -16,
    },

    // .page-servicos .section-3 .servicos .pesquisa .d-flex .btn {
    btn: {

        height: 33,
    },
    
    // .page-servicos .section-3 .servicos .group-servicos{ 
   groupservicos: {

        display: 'flex',
    },
    
    
export default styles,