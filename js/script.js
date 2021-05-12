let userName = document.getElementById("userName")
let getData = document.getElementById("getData")

let $ = document.querySelector.bind(document)

getData.addEventListener("click", findUser)


function findUser() {

    if (userName.value == "") {
        $(".output").style.display = "none"
    }
    else{
        $(".output").style.display = "block"
    }
    let xhttp = new XMLHttpRequest
    xhttp.onload = function () {
        if (this.status === 200) {
            let informations = JSON.parse(this.responseText)
            $("#icon").setAttribute("href", `${informations.avatar_url}`)
            $("title").innerHTML = `Git Name : ${informations.name}`

            $("#gitName").innerHTML = informations.name
            $("#profileImage").setAttribute("src", `${informations.avatar_url}`)

            $("#bio").innerHTML = "<span>Bio:</span>" + informations.bio
            $("#followres").innerHTML = "<span>Followers:</span>" + informations.followres
            $("#following").innerHTML = "<span>Following:</span>" + informations.following
            $("#location").innerHTML = "<span>Location:</span>" + informations.location
            $("#email").innerHTML = "<span>Email:</span>" + `<a target="_blank" href=${"mailto:"+informations.email} >${informations.email}</a>`

            $("#github_link").innerHTML = "<span>Github Link:</span>" + `<a target="_blank" href=${informations.html_url} >${informations.html_url}</a>`
            $("#github_repos").innerHTML = "<span>Repos Number:</span>" + informations.public_repos
            $("#company").innerHTML = "<span>Company:</span>" + informations.company
            $("#github_join").innerHTML = "<span>Github Joined:</span>" + informations.created_at
            $("#website").innerHTML = "<span>Website:</span>" + `<a target="_blank" href=${informations.blog} >${informations.blog}</a>` 

            if (informations.name == undefined) {
                $("#gitName").innerHTML = "No info founded"
                $("title").innerHTML = `Git Name : No info founded`
            }
            if (informations.bio == null) {
                ("#bio").innerHTML = "<span>Bio:</span>" + "No info founded"
            }
            if (informations.followres == undefined) {
                $("#followres").innerHTML = "<span>Followers:</span>" + "No info founded"
            }
            if (informations.following == undefined) {
                $("#following").innerHTML = "<span>Following:</span>" + "No info founded"
            }
            if (informations.location == undefined) {
                $("#location").innerHTML = "<span>Location:</span>" + "No info founded"
            }
            if (informations.company == null) {
                $("#company").innerHTML = "<span>Company:</span>" + "No info founded"
            }
            if (informations.email == null) {
                $("#email").innerHTML = "<span>Email:</span>" + "No info founded"
            }

        }
    }
    xhttp.open("GET", `https://api.github.com/users/${userName.value}`, true)
    xhttp.send()
}