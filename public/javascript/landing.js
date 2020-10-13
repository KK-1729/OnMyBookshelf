function add() {
    var myBooks = [
        {
            "Book": "The Adventures of Sherlock Holmes",
            "Url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Adventures_of_sherlock_holmes.jpg/330px-Adventures_of_sherlock_holmes.jpg",
            "Description": "One of the finest classic works of Sir Arthur Conan Doyle, it is one of the parts of the complete works Sherlock Homes",
            "Summary": "All of the stories within The Adventures of Sherlock Holmes are told in a first-person narrative from the point of view of Dr. Watson, as is the case for all but four of the Sherlock Holmes stories. The Oxford Dictionary of National Biography entry for Doyle suggests that the short stories contained in The Adventures of Sherlock Holmes tend to point out social injustices, such as a king's betrayal of an opera singer, a stepfather's deception of his ward as a fictitious lover, an aristocratic crook's exploitation of a failing pawnbroker, a beggar's extensive estate in Kent.It suggests that, in contrast, Holmes is portrayed as offering a fresh and fair approach in an unjust world of official incompetence and aristocratic privilege. The Adventures of Sherlock Holmes contains many of Doyle's favourite Sherlock Holmes stories. In 1927, he submitted a list of what he believed were his twelve best Sherlock Holmes stories to The Strand Magazine. Among those he listed were The Adventure of the Speckled Band (as his favourite), The Red-Headed League (second), A Scandal in Bohemia (fifth) and The Five Orange Pips (seventh)."
        },
        {
            "Book": "Murder on the Orient Express",
            "Url": "https://images-na.ssl-images-amazon.com/images/I/51UA4cTPAhL._SX321_BO1,204,203,200_.jpg",
            "Description": "A classic Hercule Poirot mystery and Agatha Christie's most famous murder mystery",
            "Summary": "Murder on the Orient Express is undoubtedly one of Agatha Christie's greatest mystery novels. Just after midnight, a snowdrift stops the Orient Express in its tracks. The luxurious train is surprisingly full for the time of the year, but by the morning it is one passenger fewer. An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside. Isolated and with a killer in their midst, detective Hercule Poirot must identify the murderer – in case he or she decides to strike again."
        },
        {
            "Book": "The ABC Murders",
            "Url": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Agatha_Christie_The_A.B.C._Murders_first_edition_cover_1936.jpg",
            "Description": "Murder is a very simple crime. But at vthe hands of a maniac, a serial killer, it becomes a very complicated business",
            "Summary": "Hercule Poirot is an acclaimed detective, originally from France, but currently retired from Scotland Yard in England. He and his friend Captain Hastings yearn for more mystery in their retired lives when, suddenly, Poirot receives a letter from an unknown source. It details a murder of someone unknown that will take place in Andover. Signed by ABC, this murder actually does happen to a Mrs. Ascher, a small shop owner. Poirot and Hastings look into the murder, but the only strange thing is the ABC railway guide that was left face down on the counter. This murder does not take much notice by the press as it happened in a small town and to an elderly lady with an angry ex-husband."
        },
        {
            "Book": "Harry Potter and the Philosopher's Stone",
            "Url": "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
            "Description": "The first installment in the series of Harry Potter in the wizarding world at Hogwarts school of Witchcraft and Wizadry",
            "Summary": "It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he's a wizard."
        },
        {
            "Book": "Harry Potter and the Chamber of Secrets",
            "Url": "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
            "Description": "The second installment in the series of Harry Potter in the wizarding world at Hogwarts school of Witchcraft and Wizadry",
            "Summary": "The second instalment of boy wizard Harry Potter's adventures at Hogwarts School of Witchcraft and Wizardry, based on the novel by JK Rowling. A mysterious elf tells Harry to expect trouble during his second year at Hogwarts, but nothing can prepare him for trees that fight back, flying cars, spiders that talk and deadly warnings written in blood on the walls of the school."
        },
        {
            "Book": "Harry Potter and the Prisoner of Azkaban",
            "Url": "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
            "Description": "The third installment in the series of Harry Potter in the wizarding world at Hogwarts school of Witchcraft and Wizadry",
            "Summary": "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J.K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies. The book was published in the United Kingdom on 8 July 1999 by Bloomsbury and in the United States on 8 September 1999 by Scholastic, Inc. Rowling found the book easy to write, finishing it just a year after she began writing it. The book sold 68,000 copies in just three days after its release in the United Kingdom and since has sold over three million in the country."
        },
        {
            "Book": "Harry Potter and the Goblet of Fire",
            "Url": "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
            "Description": "The fourth installment in the series of Harry Potter in the wizarding world at Hogwarts school of Witchcraft and Wizadry",
            "Summary": "Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete."
        },
        {
            "Book": "Harry Potter and the Order of Phoenix",
            "Url": "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg",
            "Description": "The fifth installment in the series of Harry Potter in the wizarding world at Hogwarts school of Witchcraft and Wizadry",
            "Summary": "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.[1] It is the longest book of the series."
        },
        {
            "Book": "Harry Potter and the Half Blood Prince",
            "Url": "https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png",
            "Description": "The sixth installment in the series of Harry Potter in the wizarding world at Hogwarts school of Witchcraft and Wizadry",
            "Summary": "Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling and the sixth and penultimate novel in the Harry Potter series. Set during Harry Potter's sixth year at Hogwarts, the novel explores the past of Harry's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore. The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic on 16 July 2005, as well as in several other countries. It sold nine million copies in the first 24 hours after its release, a record that was eventually broken by its sequel, Harry Potter and the Deathly Hallows. There were many controversies before and after it was published, including the right to read copies delivered before the release date in Canada. Reception to the novel was generally positive, and it won several awards and honours, including the 2006 British Book of the Year award."
        },
        {
            "Book": "Harry Potter and the Deathly Hallows",
            "Url": "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
            "Description": "The seventh and the final installment in the series of Harry Potter in the wizarding world at Hogwarts school of Witchcraft and Wizadry",
            "Summary": "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort. Deathly Hallows shattered sales records upon release, surpassing marks set by previous titles of the Harry Potter series. It holds the Guinness World Record for most novels sold within 24 hours of release, with 8.3 million sold in the US and 2.65 million in the UK.[1][2] Generally well received by critics, the book won the 2008 Colorado Blue Spruce Book Award, and the American Library Association named it the Best Book for Young Adults. A film adaptation of the novel was released in two parts: Harry Potter and the Deathly Hallows – Part 1 in November 2010 and Part 2 in July 2011."
        }
    ]

    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = "<img src = " + myBooks[i][col[1]] + ">";
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = "<div class='container'><h4>" + myBooks[i][col[0]] + "</h4><br><strong>Description</strong> : " + myBooks[i][col[2]] + "</div>";
        // var tabCell = tr.insertCell(-1);
        // tabCell.innerHTML = "<button type='button' class='btn btn-dark' data-toggle='modal' data-target='#details'>View Details</button><div class='modal fade' id='details' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'><divclass='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>" + myBooks[i][col[0]] + "</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'><br><strong>Summary</strong> : " + myBooks[i][col[3]] + "</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button></div></div></div></div>";
    }
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}