# anpr-dashcam

![Preview](https://raw.githubusercontent.com/kslat3r/anpr-dashcam/master/app/example.png)

This application takes photos of the road ahead, scans for a number plate and displays any information found from the DVLA (UK) for that number plate.

A Node.js/React application designed to run on the Raspberry Pi v3 with touchscreen and camera modules.

* Touchscreen module is available to purchase here - http://amzn.eu/7iYAOBB
* Camera module is available to purchase here - http://amzn.eu/j2LCfbh

## Prerequisites

* Docker

## Building the application

`docker build -t anpr-dashcam:latest .`

## Running the application

`docker run -it -p 3000:3000 -p 4000:4000 -e MOCK=true anpr-dashcam:latest`

## Disclaimer

THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
