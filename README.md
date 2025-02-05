![logo](./src/assets/images/httpinfo-logo.png)
# Description
`$ httpinfo` _HTTP Status Code Lookup_.

A CLI app for looking up HTTP status codes from the comfort of your terminal.

Instantly retrieve information on HTTP status codes, including their meaning, description, and specification. No more tedious web searches or cumbersome documentation.

*Features*

- Quick and easy lookup of HTTP status codes
- Detailed information on each status code, including meaning, description, and specification
- Convenient CLI interface for rapid lookup

# Getting Started
## Installation
`httpinfo` can be installed by cloning the repo and installing manually:
```bash
# cloning the repo
git clone https://github.com/devfloww/httpinfo
# enter the cloned repo directory
cd httpinfo
# Install the dependences
npm install
# Create a symlink of the program
npm link
# Now, run the command
httpinfo --help
# or sometimes on windows 
httpinfo.cmd --help
```
## Usage
- To seek help:
```bash
httpinfo [-h | --help]
```
- To look-up a status code with a short description (just the name):
```bash
httpinfo -c <code>
```
- To look-up a status code with a longer description (meaning, specification, examples): 
```bash
httpinfo -c <code> [--l | --long]
```
- To check version:
```bash@sadiqhayatuddeen/httpinfo
httpinfo [-v | --version]
```
- To update to latest version of the application
```bash
httpinfo --update 
```
## Removal 
And of course, when you don't need it anymore and want to remove it, run:
```bash
httpinfo --remove
```
> If you were not satisfied with the experience you had with this tool, please do me a favor and call my attention for improvements. This will help me a lot and I will very much appreciate that.😅

Mail me @ [svdiqhayatuddeen@gmail.com](mailto:svdiqhayatuddeen@gmail.com) or raise an _Issue_ here on Github. Thank you.

# Support me
Buy me coffee to support😅.\

<a href="https://buymeacoffee.com/devfloww" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
