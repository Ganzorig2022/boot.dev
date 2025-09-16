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
head -n -3 folder/file.txt # show all but the first 3 lines of a file
tail -n 10 file.txt # show the last 10 lines of a file
less -N lessons.md # view a file with line numbers
ls -R -F # list files, underneath directories

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
rmdir old_directory # remove an empty directoryd
cp source.txt destination.txt # copy a file
mv oldname.txt newname.txt # rename or move a file
find . -name "*.txt" # find files with a specific pattern
chmod +x script.sh # make a script executable 
```

#### 3. Permissions and Ownership
```bash
sudo whoami # run a command as superuser
ls -l # list files with detailed information
drwxr-xr-x 1 user group 4096 Jan 01 00:00 directory_name # example of file permissions
d # directory
rwx # read, write, execute permissions for the OWNER
r-x # read and execute permissions for the GROUP
r-x # read and execute permissions for OTHERS

chmod 755 file.txt # change permissions to rwxr-xr-x
chmod -R u=rwx,g=r,o=r directory_name # change permissions recursively. U means user, G means group, O means others
```

#### 4. Programming and Scripting
```zsh
#!/bin/bash # shebang line to specify the script interpreter

`sh`: The Bourne Shell
`bash`: The Bourne Again Shell

nano ~/.bashrc
nano ~/.zshrc
WARN_MESSAGE="this works too" ./warn.sh
```

#### 5. Input and Output

```zsh
man ls # view the manual for a command
wc -c pr_ideas.txt # count the number of bytes in a file. 1098 pr_ideas.txt
wc -w pr_ideas.txt # count the number of words in a file. 198 pr_ideas.txt
curl -h # display help for the curl command

echo $? # print the exit status of the last command
grep "Marshal" worldbanc/private/transactions/2020.csv # search for a string in a file

# Standard Error
# Redirect stderr to a File
# Running this script from parent directory
./worldbanc/private/bin/process_transactions.sh worldbanc/private/transactions/2020.csv 2> /tmp/worldbanc.log
cat /tmp/worldbanc.log # view the log file

# Standard Input
# Redirect stdin to a File
# Running this script from parent directory
./worldbanc/private/bin/process_transactions.sh worldbanc/private/transactions/2020.csv > /tmp/worldbanc.log
cat /tmp/worldbanc.log # view the log file

# Piping ( | )
# Use the pipe operator to pass output from one command to another
cat worldbanc/private/transactions/2020.csv | grep "Marshal" | wc -w # count the number of words containing "Marshal"
grep -R "Bob" worldbanc/private/transactions --exclude-dir="backups" | wc -l # count the number of lines containing "Bob" in the transactions directory, excluding backups
grep "phoneRegex" ./src/routes/v2/agent_qr/set_qr.js | less # search for "phoneRegex" in a specific file and view with less
```

# Kill a Process
ps aux | grep "process_name" # find the process ID (PID) of a running
ps aux | grep malicious.sh # find the PID of a script. Second column is the PID
kill 77837
```

#### Batch Processing with xargs

```bash
for file in */*; do echo $file; done 

<!-- Advanced Git/lessons.md
Linux/lessons.md
Typescript/lessons.md
Typescript/lessons.ts
Typescript/tsconfig.json
worldbanc/private
worldbanc/public
worldbanc/README.md -->
```





