const timBernersLee = document.querySelector('.header1');
const larryPage = document.querySelector('.header2');
const blaisePascal = document.querySelector('.header3');
const billGates = document.querySelector('.header4');
const writeBerners = document.querySelector('.berners-lee');
const writePage = document.querySelector('.larrypage');
const writePascal = document.querySelector('.blaisepascal');
const writeGates = document.querySelector('.billgates')

timBernersLee.addEventListener('click', showBio1);
larryPage.addEventListener('click', showBio2);
blaisePascal.addEventListener('click', showBio3);
billGates.addEventListener('click', showBio4);
function showBio1(click){
    writeBerners.classList.toggle('inactive');
    const someBioOpen = {
        timOpen: !writeBerners.classList.contains('inactive'),
        larryOpen: !writePage.classList.contains('inactive'),
        pascalOpen: !writePascal.classList.contains('inactive'),
        billOpen: !writeGates.classList.contains('inactive')
    } 
    if(someBioOpen){
       writePage.classList.add('inactive');
       writePascal.classList.add('inactive');
       writeGates.classList.add('inactive');
    }
}
function showBio2(click){
    writePage.classList.toggle('inactive');
    const someBioOpen = {
        timOpen: !writeBerners.classList.contains('inactive'),
        larryOpen: !writePage.classList.contains('inactive'),
        pascalOpen: !writePascal.classList.contains('inactive'),
        billOpen: !writeGates.classList.contains('inactive')
    } 
    if(someBioOpen){
       writeBerners.classList.add('inactive');
       writePascal.classList.add('inactive');
       writeGates.classList.add('inactive');
    }
}
function showBio3(click){
    writePascal.classList.toggle('inactive');
    const someBioOpen = {
        timOpen: !writeBerners.classList.contains('inactive'),
        larryOpen: !writePage.classList.contains('inactive'),
        pascalOpen: !writePascal.classList.contains('inactive'),
        billOpen: !writeGates.classList.contains('inactive')
    } 
    if(someBioOpen){
       writePage.classList.add('inactive');
       writeBerners.classList.add('inactive');
       writeGates.classList.add('inactive');
    }
}
function showBio4(click){
    writeGates.classList.toggle('inactive');
    const someBioOpen = {
        timOpen: !writeBerners.classList.contains('inactive'),
        larryOpen: !writePage.classList.contains('inactive'),
        pascalOpen: !writePascal.classList.contains('inactive'),
        billOpen: !writeGates.classList.contains('inactive')
    } 
    if(someBioOpen){
       writePage.classList.add('inactive');
       writePascal.classList.add('inactive');
       writeBerners.classList.add('inactive');
    }
}

