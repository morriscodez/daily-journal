const journal = [
    {
        id: 1,
        date: "1/14/21",
        concept: "JS Data Debugging",
        entry: "We talked about using the console to debug code in our JS data handling",
        mood: "Fine",
    },
    {
        id: 2,
        date: "1/13/21",
        concept: "JS Data",
        entry: "We used js functions to dynamically populate our HTML files. It took a lot to understand the different variables and what they were representing, especially within the scope of their functions and the global scope with import and export statements separating the modules",
        mood: "Frusturated",
    },
    {
        id: 3,
        date: "1/12/21",
        concept: "Flexbox",
        entry: "We learned about flexbox styling and I thought handling flex boxes within flexboxes would be simple. It was not.",
        mood: "Overwhelmed",
    },
    {
        id: 4,
        date: "1/11/21",
        concept: "Wireframing",
        entry: "We talked about how wireframing your site layout saves time with HTML scturcture hard coding. We got a real life example of this in my team's planning stage where wireframing made hard-coding a breeze",
        mood: "Proud",
    },
]


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => 
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}