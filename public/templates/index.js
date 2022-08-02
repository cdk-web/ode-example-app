{
  "empty_python": {
    "name": "Empty Python Project",
    "description": "# Empty Python Project",
    "icon": "python-lang-file-icon",
    "files": [
      {
        "name": "README.md"
      },
      {
        "name": "actions/share.js"
      },
      {
        "name": "applications/python.js"
      },
      {
        "name": "package.json"
      },
      {
        "name": "src/index.py"
      }
    ],
    "applications": [
      "applications/python.js"
    ],
    "actions": [
      {
        "label": "Deploy",
        "command": "cdk deploy",
        "icon": "GoRocket",
        "index": 0
      },
      {
        "label": "Deploy",
        "command": "cdk deploy",
        "icon": "GoRocket",
        "index": 0
      },
      {
        "icon": "GoRocket",
        "label": "Share",
        "title": "Share Project",
        "onClick": "actions/share.js"
      }
    ]
  }
}
