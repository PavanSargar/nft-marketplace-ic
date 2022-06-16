Copyright 2022 London App Brewery LTD (www.appbrewery.com)

The code in this tutorial project is licended under the Apache License, Version 2.0 (the "License");
you may not use this project except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Here is the TL;DR version of the above licence:
https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)

# To Install and Run the Project

1. start local dfx

```
dfx start --clean
```

2. Run NPM server

```
npm start
```

3. Deploy canisters

```
dfx deploy --argument='("CryptoDunks #123", principal "kqnaf-sm4gj-6spit-7monj-2ftnh-lfbr5-dhhnn-4moyj-mmqdd-enw5d-tae", (vec {137; 80; 78; 71; 13; 10; 26; 10; 0; 0; 0; 13; 73; 72; 68; 82; 0; 0; 0; 10; 0; 0; 0; 10; 8; 6; 0; 0; 0; 141; 50; 207; 189; 0; 0; 0; 1; 115; 82; 71; 66; 0; 174; 206; 28; 233; 0; 0; 0; 68; 101; 88; 73; 102; 77; 77; 0; 42; 0; 0; 0; 8; 0; 1; 135; 105; 0; 4; 0; 0; 0; 1; 0; 0; 0; 26; 0; 0; 0; 0; 0; 3; 160; 1; 0; 3; 0; 0; 0; 1; 0; 1; 0; 0; 160; 2; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 160; 3; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 0; 0; 0; 0; 59; 120; 184; 245; 0; 0; 0; 113; 73; 68; 65; 84; 24; 25; 133; 143; 203; 13; 128; 48; 12; 67; 147; 94; 97; 30; 24; 0; 198; 134; 1; 96; 30; 56; 151; 56; 212; 85; 68; 17; 88; 106; 243; 241; 235; 39; 42; 183; 114; 137; 12; 106; 73; 236; 105; 98; 227; 152; 6; 193; 42; 114; 40; 214; 126; 50; 52; 8; 74; 183; 108; 158; 159; 243; 40; 253; 186; 75; 122; 131; 64; 0; 160; 192; 168; 109; 241; 47; 244; 154; 152; 112; 237; 159; 252; 105; 64; 95; 48; 61; 12; 3; 61; 167; 244; 38; 33; 43; 148; 96; 3; 71; 8; 102; 4; 43; 140; 164; 168; 250; 23; 219; 242; 38; 84; 91; 18; 112; 63; 0; 0; 0; 0; 73; 69; 78; 68; 174; 66; 96; 130;}))'
```

4. Head to localhost

http://localhost:8080/

# Minter Else HTML

```
 <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Minted!
        </h3>
        <div className="horizontal-center">
        </div>
      </div>

```

# Loader HTML

```
<div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
```

# Button HTML

```
<div className="Chip-root makeStyles-chipBlue-108 Chip-clickable">
            <span
              onClick={}
              className="form-Chip-label"
            >
              Sell
            </span>
            </div>
```

# Price Input HTML

```
<input
        placeholder="Price in DANG"
        type="number"
        className="price-input"
        value={}
        onChange={}
      />
```

# Price Label HTML

```
<div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
          <span className="disChip-label">23 DANG</span>
        </div>
```

# Creating NFT for Testing

1. Mint an NFT on the command line to get NFT into mapOfNFTs:

```
dfx canister call opend mint '(vec {137; 80; 78; 71; 13; 10; 26; 10; 0; 0; 0; 13; 73; 72; 68; 82; 0; 0; 0; 10; 0; 0; 0; 10; 8; 6; 0; 0; 0; 141; 50; 207; 189; 0; 0; 0; 1; 115; 82; 71; 66; 0; 174; 206; 28; 233; 0; 0; 0; 68; 101; 88; 73; 102; 77; 77; 0; 42; 0; 0; 0; 8; 0; 1; 135; 105; 0; 4; 0; 0; 0; 1; 0; 0; 0; 26; 0; 0; 0; 0; 0; 3; 160; 1; 0; 3; 0; 0; 0; 1; 0; 1; 0; 0; 160; 2; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 160; 3; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 0; 0; 0; 0; 59; 120; 184; 245; 0; 0; 0; 113; 73; 68; 65; 84; 24; 25; 133; 143; 203; 13; 128; 48; 12; 67; 147; 94; 97; 30; 24; 0; 198; 134; 1; 96; 30; 56; 151; 56; 212; 85; 68; 17; 88; 106; 243; 241; 235; 39; 42; 183; 114; 137; 12; 106; 73; 236; 105; 98; 227; 152; 6; 193; 42; 114; 40; 214; 126; 50; 52; 8; 74; 183; 108; 158; 159; 243; 40; 253; 186; 75; 122; 131; 64; 0; 160; 192; 168; 109; 241; 47; 244; 154; 152; 112; 237; 159; 252; 105; 64; 95; 48; 61; 12; 3; 61; 167; 244; 38; 33; 43; 148; 96; 3; 71; 8; 102; 4; 43; 140; 164; 168; 250; 23; 219; 242; 38; 84; 91; 18; 112; 63; 0; 0; 0; 0; 73; 69; 78; 68; 174; 66; 96; 130;}, "CryptoDunks #123")'
```
```
dfx canister call opend mint '(vec {137; 80; 78; 71; 13; 10; 26; 10; 0; 0; 0; 13; 73; 72; 68; 82; 0; 0; 0; 20; 0; 0; 0; 20; 8; 6; 0; 0; 0; 141; 137; 29; 13; 0; 0; 0; 1; 115; 82; 71; 66; 0; 174; 206; 28; 233; 0; 0; 1; 3; 73; 68; 65; 84; 56; 79; 99; 100; 160; 50; 96; 36; 194; 188; 255; 72; 106; 8; 170; 199; 167; 0; 108; 208; 28; 245; 13; 12; 167; 133; 217; 25; 76; 223; 254; 100; 72; 185; 25; 128; 108; 63; 86; 189; 120; 13; 76; 183; 218; 14; 54; 8; 102; 32; 140; 6; 153; 10; 53; 28; 67; 63; 46; 3; 255; 35; 187; 12; 221; 64; 16; 127; 230; 49; 79; 152; 107; 81; 204; 32; 219; 64; 164; 32; 32; 104; 224; 127; 92; 94; 197; 230; 117; 228; 64; 77; 185; 25; 192; 136; 211; 133; 255; 207; 236; 97; 120; 182; 124; 59; 88; 189; 84; 36; 196; 123; 48; 126; 211; 113; 23; 120; 216; 34; 27; 56; 243; 152; 39; 126; 3; 25; 238; 95; 101; 96; 12; 205; 103; 0; 25; 14; 6; 72; 124; 70; 19; 23; 144; 8; 81; 145; 2; 78; 46; 112; 67; 112; 36; 84; 146; 12; 68; 55; 12; 164; 25; 155; 24; 209; 46; 4; 37; 153; 228; 165; 60; 96; 183; 65; 93; 2; 119; 39; 204; 96; 146; 92; 72; 40; 59; 130; 12; 37; 197; 64; 112; 16; 34; 27; 250; 127; 245; 68; 56; 23; 22; 73; 164; 26; 136; 97; 40; 174; 184; 65; 23; 39; 84; 122; 160; 184; 20; 77; 51; 201; 133; 3; 216; 149; 72; 225; 133; 53; 239; 146; 236; 66; 228; 228; 130; 43; 220; 8; 150; 105; 72; 10; 192; 46; 132; 59; 13; 71; 238; 160; 169; 129; 0; 122; 131; 144; 21; 165; 176; 221; 5; 0; 0; 0; 0; 73; 69; 78; 68; 174; 66; 96; 130}, "CryptoDunks #092")'
```

2. List the item into mapOfListings:

```
dfx canister call opend listItem '(principal "xpeh5-6iaaa-aaaaa-aaaua-cai", 2)'
```

3. Get OpenD canister ID:

```
dfx canister id opend
```

4. Transfer NFT to OpenD:

```
dfx canister call xpeh5-6iaaa-aaaaa-aaaua-cai transferOwnership '(principal "ryjl3-tyaaa-aaaaa-aaaba-cai", true)'
```

# Conneting to the Token Canister

1. Copy over the token declarations folder

2. Set the token canister id into the <REPLACE WITH TOKEN CANISTER ID>

```
const dangPrincipal = Principal.fromText("<REPLACE WITH TOKEN CANISTER ID>");
```
