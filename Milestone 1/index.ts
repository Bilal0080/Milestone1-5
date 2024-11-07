const toggleButton#.getElementById: any('toggleButton') as unknown as HTMLButtonElement|null;
const skillsDiv = #document.getElementById('skills') as HTMLDivElement|null;

if (toggleButton && skillsDiv){
    toggleButton.addEventListener('click', () => {
     if (skillsDiv.style.display = 'none'){
            skillsDiv.style.display = 'block';
            toggleButton.value = "Hide Skills";
        }else{
            skillsDiv.style.display = 'none';
            toggleButton.value = "Show Skills";
        }
    })
}
else{
    console.log("Required element not found in the DOM");
}