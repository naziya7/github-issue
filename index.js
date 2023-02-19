let currentPageNumber = 1
function fetchIssues(pageNumber){
fetch(`https://api.github.com/repositories/1296269/issues?page=${currentPageNumber}&per_page=5`).
then((res)=>{return res.json()}).then((data)=>{
    //console.log(typeof(data[0]))
    const issueList = document.querySelector("#issueList ol")
    issueList.innerHTML=''
    for(let key in data){
        const issueName = data[key].title
        const issueItem = document.createElement("li")
        issueItem.textContent = issueName
        issueList.appendChild(issueItem)   
    }
    
    const pageNumberHeading = document.getElementById("pageNumber")
    pageNumberHeading.textContent = `Page Number ${pageNumber}`
})
}
const loadNextBtn = document.getElementById("load_next")
const loadPreviousBtn = document.getElementById("load_prev")
loadNextBtn.addEventListener("click",()=>{
    currentPageNumber++
    fetchIssues(currentPageNumber)
})
loadPreviousBtn.addEventListener("click",()=>{
    if(currentPageNumber>1){
        currentPageNumber--
        fetchIssues(currentPageNumber)
    }
})