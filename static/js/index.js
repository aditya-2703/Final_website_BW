const floatAnimation = (element) => {
    const tlCan = new TimelineMax({ repeat: -1 });
    /*Can Animation*/
    tlCan
        //move top left
        .to(element, 3, { y: '-=10', x: '+=20', rotation: '-=5', ease: Power1.easeInOut })

        //move down right
        .to(element, 2, { y: '+=20', x: '-=20', rotation: '-=5', ease: Power1.easeInOut })


        .to(element, 3, { y: '-=10', rotation: '+=5', ease: Power1.easeInOut })

        .to(element, 3, { y: '+=20', rotation: '-=5', ease: Power1.easeInOut })


        .to(element, 3, { y: '-=10', ease: Power1.easeInOut })

        .to(element, 3, { y: '+=30', ease: Power1.easeInOut })


        .to(element, 3, { y: '-=10', ease: Power1.easeInOut })

        .to(element, 3, { y: '+=30', ease: Power1.easeInOut })


        .to(element, 2, { y: '-=10', ease: Power1.easeInOut })

        .to(element, 2, { y: '+=30', ease: Power1.easeInOut })

    TweenLite.to(tlCan, 27, { ease: Power1.easeInOut })

}
const floatAnimation2 = (element) => {
    const tlCan = new TimelineMax({ repeat: -1 });
    /*Can Animation*/
    tlCan
        //move top left
        .to(element, 3, { y: '+=10', x: '+=20', rotation: '-=5', ease: Power1.easeInOut })

        //move down right
        .to(element, 2, { y: '+=20', x: '-=20', rotation: '-=0', ease: Power1.easeInOut })


        .to(element, 3, { y: '+=10', rotation: '+=5', ease: Power1.easeInOut })

        .to(element, 3, { y: '+=20', rotation: '-=5', ease: Power1.easeInOut })


        .to(element, 3, { y: '+=10', ease: Power1.easeInOut })

        .to(element, 3, { y: '+=30', ease: Power1.easeInOut })


        .to(element, 3, { y: '-=10', ease: Power1.easeInOut })

        .to(element, 3, { y: '+=30', ease: Power1.easeInOut })


        .to(element, 2, { y: '-=10', ease: Power1.easeInOut })

        .to(element, 2, { y: '-=30', ease: Power1.easeInOut })

    TweenLite.to(tlCan, 27, { ease: Power1.easeInOut })

}

// floatAnimation(document.querySelector(".horse_piece"))
// floatAnimation2(document.querySelector(".simple_piece"))



function template(obj_arr) {

    for (let i = 0; i < obj_arr.length; i++) {
        let obj = obj_arr[i]
        let name = obj.name
        let desc = obj.desc
        let img = obj.img
        let project_url = obj.project_url
        let code_url = obj.code_url
        let about_url = obj.about_url
        let delay_mm = 100 + (100 * i)
        let string = `
<li data-aos="zoom-in" data-aos-delay=`+ delay_mm + ` class="project_box">
  <div class="above_half">
    <div class="desc">
      <div class="intro_sm">Project based on ${desc}</div>
      <div class="intro_lg">${name}</div>
    </div>
              <img src="/static/images/${img}" alt="">
  </div>
  <div class="below_half">
    <div class="below_section">
      <div class="visite_cont" id=${code_url} onclick="visite_url(this)">
        <img src="https://api.iconify.design/bi/code-slash.svg" alt="icon">
        <div class="visit_text">Code</div>
      </div>
      <div class="about_cont" id="${about_url} ${i}" onclick="about_url(this)">
        <img src="https://api.iconify.design/bi/info-circle.svg" alt="icon">
        <div class="about_text">About</div>
      </div>
    </div>
  </div>
  <div class="play_button">
    <a href="${project_url}" target="_blank" id="${i}" onclick="clickable(this)" class="outer_circle">
      <div class="inner_circle">
        <img src="https://api.iconify.design/clarity/play-solid.svg" alt="">
      </div>
    </a>
  </div>
</li>
`
        document.querySelector(".project_bucket_list").innerHTML += string
    }
}

function visite_url(ele) {
    let url = ele.id
    window.open(url, "_blank");
}
function about_url(ele) {
    let url = ele.id.split(" ")[0]
    let data = obj_arr[ele.id.split(" ")[1]]
    // console.log(data.name)
    // console.log(data.info_desc)
    // console.log(data.link)

    localStorage.clear()
    localStorage.setItem("heading", data.name)
    localStorage.setItem("intro_desc", data.info_desc)
    localStorage.setItem("link", data.link)
    window.open(url, "_blank");
}
function clickable(ele) {
    // document.querySelectorAll(".outer_circle").forEach(element => {element.style.background = "#C4C4C4"})
    ele.style.background = "#000000"
}

// let name = obj.name
// let desc = obj.desc
// let img = obj.img
let obj_arr = [
    {
        name: "2048",
        desc: "Array",
        img: "arrayBW.png",
        project_url: "/static/other_html/arrays/index.html",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/ARRAY%20-%20MATRIX",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/ARRAY%20-%20MATRIX/README.md",
        info_desc: "2048 is a well known game which is based on numbers that are multiples of 2.Whenever user reaches to 2048 then he/she wins the game. This game was implemented using basic data structure named array. You can move the blocks using the arrow key. You can also modify the code in here and make one for your own.",
        link: `<iframe scrolling="no" title="Untitled" src="https://codepen.io/adi_jarvis/embed/QWQNJQO?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/QWQNJQO">
        Untitled</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`
    },
    {
        name: "Card-Stack",
        desc: "Stack",
        img: "stackBW.png",
        project_url: "/static/other_html/stack/index.html",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/STACK",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/STACK/README.md",
        info_desc: "Card-stack is one of the most popular games among children. Initially each player has equal amount of playing cards which is 26(to each one). Then, they both have to put their card one by one from face-down to face-up on the surface. Whenever two same cards appear on the stack consecutively, the player who played last and who’s card matched with the one on surface gets all the cards lying there. When one of player ends up with zero card then the opponent wins the game. This is how the game works. For implementing this game, stack data structure is used which best describes it’s working.",
        link: `<iframe scrolling="no" title="Card - Stack" src="https://codepen.io/adi_jarvis/embed/poayYvw?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/poayYvw">
        Card - Stack</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
        name: "Music-Queue",
        desc: "Queue",
        img: "queueBW.png",
        project_url: "/static/other_html/queue/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/QUEUE/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/QUEUE",
        info_desc: "Music-Queue is a simple music player with some extra functionalities. This music player comes with a playlist which has some built in songs. The order in which these songs are played can be determined and modified using data structure. As the name suggests, it is based on queue data structure. The basic queue plays the songs in FIFO order till the end of playlist. Using circular queue, songs can be played on repeat at reaching the end of playlist. Using priority queue, user can set the song’s priority and change the playing order accordingly.",
        link: `<iframe scrolling="no" title="Music-Queue" src="https://codepen.io/adi_jarvis/embed/ZErWwVy?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/ZErWwVy">
        Music-Queue</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
        name: "Snake-Game",
        desc: "Linked List",
        img: "llBW.png",
        project_url: "/static/other_html/linkedlist/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/LINKED_LIST/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/LINKED_LIST",
        info_desc: "Snake-Game is very popular among people. It was introduced as a part of Nokia phone applications. The simple rule of this game is to move the snake with the buttons and eat the fruit to score maximum. There are a few different aspects in this game when compared to the usual one. Firstly, player loses the game if the snake touches boundary. Also, the snake can eat from both ends making the game more interesting. This game is implemented using linked list. The objects in this game like food and snake, both are nodes. Also, when the snake grows, it is implemented by appending nodes to the linked list. For playing this game use the arrow keys on keyboard and the score is displayed in the blue text. Go ahead, score maximum and compete with friends.",
        link: `<iframe scrolling="no" title="Snake-Game" src="https://codepen.io/adi_jarvis/embed/BaYKvXv?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/BaYKvXv">
        Snake-Game</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
        name: "Typing-Game",
        desc: "String",
        img: "stringBW.png",
        project_url: "/static/other_html/string/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/STRING/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/STRING",
        info_desc: "Typing-Game is simply a touch-typing game. It is used by many people to improve their typing speed. This game is built with the purpose of improving the typing speed. The text that is displayed in the board is random, each time you get a different text to practice. You just have to click on the typing bar and start typing the text. At last, when u finish the test, it will display the correct words and the wrong word along with your wpm (words per minute). This game is built using string concept where each character of the string is matched during typing.",
        link: `<iframe scrolling="no" title="Untitled" src="https://codepen.io/adi_jarvis/embed/QWQNojp?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/QWQNojp">
        Untitled</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>`

    },
    {
        name: "Bit-Calc",
        desc: "Bit-Magic",
        img: "binaryBW.png",
        project_url: "/static/other_html/bitmagic/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/BIT-MAGIC/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/BIT-MAGIC",
        info_desc: "Bit-Calculator is a simple calculator with few variations. As the name suggests, bit-calculator is based on bits, which refers to binary so all is just in the form of 0’s and 1’s. You can perform all basic operations like addition (+), subtraction (-) and many others. For These calculations, bit manipulation and binary-operators are used. The main thing which makes this calculator even more interesting is that there is no use of arithmetic operators. In this entire code you will never see and [+, -, *, /] and so all calculations take place by bit manipulation.",
        link: `<iframe scrolling="no" title="Bit-calculator" src="https://codepen.io/adi_jarvis/embed/VwQaqdz?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/VwQaqdz">
        Bit-calculator</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
        name: "Num Guessing",
        desc: "Searching",
        img: "searchBW.png",
        project_url: "/static/other_html/search/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/SEARCHING/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/SEARCHING",
        info_desc: "Number Guessing is a game which asks the user to remember any number between 0-100. After user chooses the search method, the game prompts the user with choices which aid in guessing the number. The main purpose of this game is to represent the different search methods which are linear and binary search and to depict the scenario that linear search takes many steps to find the number whereas binary search takes just few steps for the same and appears more efficient. For playing this game just select search method and go with the flow of the game.",
        link: `<iframe scrolling="no" title="Number - Guessing" src="https://codepen.io/adi_jarvis/embed/eYVZxae?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/eYVZxae">
        Number - Guessing</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
        name: "Sort Viewer",
        desc: "Sorting",
        img: "sortBW.png",
        project_url: "/static/other_html/sorting/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/SORTING/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/SORTING",
        info_desc: "Sorting-visualizer is the visualizer simulator which shows the visualization with  random size of bars and customized size and speed of bars. The different methods for visualization are bubble sort, insertion sort, selection sort, shell sort, quick sort and merge sort. For using this simulator you just have to start the game and by choosing different method you can start visualization and see how the methods works internally. The algorithm used for this project is sorting.",
        link: `<iframe scrolling="no" title="Sorting - Visualizer" src="https://codepen.io/adi_jarvis/embed/Yzeqgxz?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/Yzeqgxz">
        Sorting - Visualizer</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
        name: "Sudoku Fixer",
        desc: "Recursion",
        img: "recursionBW.png",
        project_url: "/static/other_html/recursion/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/BACKTRACKING/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/BACKTRACKING",
        info_desc: "Sudoku-solver is the game in which there is a N * N grid according to level N. The user has to fill the grid with numbers between 1 to N. While filling the numbers, user has to be careful about a number not appearing more than once in any row, column in the grid. This game shows warning when you fill repeated number in same column or same row or same box. After sudoku is filled completely, you will get the result. This game is based on recursion and backtracking algorithm, as on inserting each number it checks if it is already present or not. If you get stuck anywhere in the game then use the Get solution button to proceed.",
        link: `<iframe scrolling="no" title="Suduko-solver" src="https://codepen.io/adi_jarvis/embed/dydMaLw?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/dydMaLw">
        Suduko-solver</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
        name: "File Encoder",
        desc: "Greedy",
        img: "greedyBW.png",
        project_url: "/static/other_html/greedy/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/GREEDY/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/GREEDY",
        info_desc: "File Encoder is encoder which encode the text somehow the size of the text is reduce by 38%. This encoder uses huffman encoding as algorithm. The user has to enter the text and the algorithm will encode the text and show the encoded text. The user can also decode the encoded text and get the original text. This project is based on greedy algorithm.",
        link: `<iframe scrolling="no" title="Untitled" src="https://codepen.io/adi_jarvis/embed/YzeNeZp?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/YzeNeZp">
        Untitled</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
        name: "Contact Diary",
        desc: "Trie",
        img: "trieBW.png",
        project_url: "/static/other_html/trie/index.html",
        about_url: "https://github.com/aditya-2703/DSA-HUB/blob/main/TRIE/README.md",
        code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/TRIE",
        info_desc: "Contact - Diary is an app which is able to add the contact with it's name and phone number and it's also able to search the contact number by name. the suggestions also shown by this app. this project is implemented using the data structure named trie. trie gives us ability to search and add data in very less time complexity. for use this app you can search any contact details which is shown in this phone. For adding extra contact just add the name and phone number to input field and press add your contact is saved.",
        link: `<iframe scrolling="no" title="Contact - Diary" src="https://codepen.io/adi_jarvis/embed/RwQpRqe?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/adi_jarvis/pen/RwQpRqe">
        Contact - Diary</a> by aditya (<a href="https://codepen.io/adi_jarvis">@adi_jarvis</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>`

    },
    {
      name: "Graph Games",
      desc: "Graph",
      img: "graph.png",
      project_url: "/static/other_html/graph/index.html",
      about_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/GRAPH",
      code_url: "https://github.com/aditya-2703/DSA-HUB/tree/main/GRAPH",
      info_desc: "Graph Games is an app showcasing two projects based on graph data structures: Pathfinding Game using DFS and Sliding Puzzle using BFS. The Pathfinding Game demonstrates how DFS explores nodes deeply to find a path in a graph, while the Sliding Puzzle uses BFS to solve puzzles by finding the shortest solution through level-by-level exploration. This app offers an interactive way to visualize and understand these graph traversal algorithms.",
      link: ``

  },

]

template(obj_arr)