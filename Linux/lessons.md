```bash
whoami # print the current user
expr 123456 + 7890 # perform arithmetic operation
echo "Hello, World!" # print a message to the console
name="Ganzo" # assign a value to a variable. Note: no spaces around the equal sign
echo "My name is $name" # use the variable in a message
history # show command history
ctrl + l # clear the terminal screen
```

#### 2. File System Commands
```bash
pwd # print the current working directory
cat file.txt # display the contents of a file
head -n 10 file.txt # show the first 10 lines of a file
tail -n 10 file.txt # show the last 10 lines of a file
less -N lessons.md # 

touch newfile.txt # create an empty file
mkdir my_directory # create a new directory
mv file.txt new_file_name.txt # rename a file
mv lessons1.md ../lessons2.md # move a file to a parent directory
rm file.txt # remove a file
rm -rf directory_name # remove a directory and its contents
cp file.txt /path/to/directory/ # copy a file to a directory
cd ~ # change to the home directory
grep "Hello" file.txt # search for a string in a file
grep -r "Hello" /path/to/directory # search recursively in a directory
grep "Hello" file.txt file1.txt # search in multiple files
find linux -name lessons.md # find a file by name
find linux -name "*les*" # find files with a pattern

ls # list files in the current directory
cd /path/to/directory # change to a specific directory
rmdir old_directory # remove an empty directory
cp source.txt destination.txt # copy a file
mv oldname.txt newname.txt # rename or move a file
find . -name "*.txt" # find files with a specific pattern
chmod +x script.sh # make a script executable 
```