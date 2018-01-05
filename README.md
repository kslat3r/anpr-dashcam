# anpr-dashcam

![Preview](https://github.com/kslat3r/anpr-dashcam/raw/master/example.png)

This application takes photos of the road ahead, scans for a number plate and displays any information found from the DVLA (UK) for that number plate.

A Node.js/React application designed to run on the Raspberry Pi v3 with touchscreen and camera modules.

* Touchscreen module is available to purchase here - http://amzn.eu/7iYAOBB
* Camera module is available to purchase here - http://amzn.eu/j2LCfbh

## Prerequisites

* openalpr (https://github.com/openalpr/openalpr)
* Node v8.4.0 (recommended)

## Running the server

### OSX

* Install Homebrew
* `brew install homebrew/science/openalpr`
* npm install
* (On local machine) MOCK=true npm start
* (On Raspberry Pi) npm start

### Windows

* Install openalpr (?)
* npm install
* (On local machine) MOCK=true npm start
* (On Raspberry Pi) npm start

## Running the client

From root directory:

* `cd client/`
* `npm install`
* `npm start`

## Disclaimer

THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
