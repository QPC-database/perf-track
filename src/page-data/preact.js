/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

export const headerOptions = [
  'Preact'
];

export const data = {
  [headerOptions[0]]: {
    'sampleSize': {
      framework: 101407,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 63314,
      numRequests: 3107007,
      gzipCompressedPercent: 64.1,
      brotliCompressedPercent: 17.2
    },
    'totalBytesBreakdown': {
      numUrls: 101407,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.1, 0.4, 1.3, 2.4, 3.2, 92.6]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 101407,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.5, 6.9, 18.3, 18.4, 15.4, 39.6]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 101407,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [10.2, 10.4, 9.8, 8.6, 6.8, 54.3]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 48842,
      data: [47, 27, 26],
    },
    'lcpCrux': {
      numOrigins: 47355,
      data: [46, 19, 35],
    },
    'fidCrux': {
      numOrigins: 35277,
      data: [80, 15, 6],
    },
    'clsCrux': {
      numOrigins: 48579,
      data: [100, 0, 0],
    },
    'ttfbCrux': {
      numOrigins: 48796,
      data: [14, 19, 67],
    },
  }
}
