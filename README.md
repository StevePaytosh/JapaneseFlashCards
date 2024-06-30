# Japanese Flash Cards
**ABOUT**

The Japanese Flash Card App generates flash card questions based on either hard-coded inputs or by taking in a Pipe Separated Values (PSV) file.

* Questions may come in the form of Kanji, Katakana, Hiragana, Romanji or a mix of these depending on the category and how the questions are written
* Questions will typically indicate a category to help give context to the question being asked
* The next button can be used to reveal the answer to a question as well as to load the next question when available
* A romanji assist may be available for question, but will only be shown when the romanji option is selected
* There is an option to switch the Question and Answer display, so that the (typically) english answer will become the question. This can be a usefull study technique to assist with learning.
* A question counter is availble, currently it only shows when the option to remove questions is selected. As you progress questions will not repeat (unless it was written more than once), the counter will then tell you how many questions remain in the set


**LOADING A PSV FILE**

If you have a PSV available to study, you will be able to select the browse button and you can then select your file. Hitting Load PSV will read your file and generate your flash cards. 

**WRITING A PSV**

A PSV replicates a data table (think excel or a similar spread sheet application).
To write a PSV, you create the data one row at a time with each row separated by a pipe "|". Each row is separated by a new-line (the same as hitting enter).

**MAKING A PSV FILE WITH JAPANESE FLASH CARD FILE MAKER**

Included in the repo is a application to assist with making PSV files. The app allows you to enter multiple rows of data, where it can then convert the data into text that can be coppied into a manualy made PSV file or can be downloaded directly from the page itself with the correct formatting.

**DOWNLOAD AND RUN**

To Download and run the application, all you have to do is clone the repository and open up a JapaneseFlashCard instance in your favorite browser.

**CODEPEN DEPLOYMENTS**

Instances of this app are currently deployed to Codepen and are partially controlled by files hosted on this repo

currently there are 2 deployments

[Preload-JapaneseFlashCards](https://codepen.io/StevePaytosh/full/RwdZOep)

[PSV-JapaneseFlashCards](https://codepen.io/StevePaytosh/full/JjVVdzb)

[File Maker](https://codepen.io/StevePaytosh/full/bGyNMEY)

**THIS REPO**

This is a open source project open to contributions from developers and Japanese speakers who might wish to contribute content. Please feel free to reach out if you are interested in contributing.

**BRANCHING STRATEGY**

The top level branch for this project is trunk

Below the trunk branch are several -senpai branches used for funneling specific types of changes. Changes should go into a -senpai branch where it can then be merged into trunk.

* bug-fixes-senpai: bug fixes should be merged into this branch
* content-senpai: content updates for PSV files and Preloaded Questions as well as for ReadMe updates
* enhancements-senpai: this is for code that updates or enhances existing functionality, these should be seperate from new features or version
* features-senpai: this is for new features and versions or for major updates especially if it involves core functionality
* lipstick-senpai: this is for asthetic UI changes such as color/theme, button size or shape, font updates or re-arranging elements without changing their funtionality

exceptions can be made for branching if the situation warrants it