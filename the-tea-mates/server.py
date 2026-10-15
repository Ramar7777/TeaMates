"""
TEA MATES - Local Development & Management Server
Run this script to preview the website locally:
    python server.py
"""
import http.server
import socketserver
import webbrowser
import os
import sys
import json

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(DIRECTORY, "data", "data.json")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Route /admin and /admin/ to pages/admin.html
        clean_path = self.path.split('?')[0].rstrip('/')
        if clean_path in ['/admin', '/admin.html']:
            self.path = '/pages/admin.html'
            return super().do_GET()

        # API: GET /api/data
        if clean_path == '/api/data':
            if os.path.exists(DATA_FILE):
                with open(DATA_FILE, 'r', encoding='utf-8') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(content.encode('utf-8'))
            else:
                self.send_response(404)
                self.end_headers()
            return

        return super().do_GET()

    def do_POST(self):
        clean_path = self.path.split('?')[0].rstrip('/')
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)

        if clean_path == '/api/save':
            try:
                new_data = json.loads(post_data.decode('utf-8'))
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(new_data, f, indent=2, ensure_ascii=False)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(b'{"status":"ok"}')
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        if clean_path == '/api/leads':
            try:
                new_lead = json.loads(post_data.decode('utf-8'))
                current_data = {}
                if os.path.exists(DATA_FILE):
                    with open(DATA_FILE, 'r', encoding='utf-8') as f:
                        current_data = json.load(f)
                if 'leads' not in current_data:
                    current_data['leads'] = []
                current_data['leads'].insert(0, new_lead)
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(current_data, f, indent=2, ensure_ascii=False)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(b'{"status":"ok"}')
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

def run():
    os.chdir(DIRECTORY)
    global PORT
    socketserver.TCPServer.allow_reuse_address = True
    for attempt_port in [8080, 8000, 3000, 5000]:
        try:
            with socketserver.TCPServer(("", attempt_port), Handler) as httpd:
                PORT = attempt_port
                url = f"http://localhost:{PORT}"
                print("=" * 60)
                print(f"  TEA MATES - Website & Admin Server")
                print(f"  Theme: Black & Yellow | Franchise Network Portal")
                print(f"  Public Website: {url}")
                print(f"  Admin Console:  {url}/admin (Password: Siva@07268)")
                print("  Press Ctrl+C to stop the server.")
                print("=" * 60)
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
                break
        except OSError:
            continue

if __name__ == "__main__":
    try:
        run()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
