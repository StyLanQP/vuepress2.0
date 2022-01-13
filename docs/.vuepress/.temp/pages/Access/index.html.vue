<template><h1 id="viewing-devices" tabindex="-1"><a class="header-anchor" href="#viewing-devices" aria-hidden="true">#</a> Viewing devices</h1>
<p>For each device, this section shows the following information provided in columns:</p>
<table>
<thead>
<tr>
<th>Column</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Serial Number</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>Alias</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>Model</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>......</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h2 id="viewing-in-table" tabindex="-1"><a class="header-anchor" href="#viewing-in-table" aria-hidden="true">#</a> Viewing in table</h2>
<h3 id="editing-device-table-headers" tabindex="-1"><a class="header-anchor" href="#editing-device-table-headers" aria-hidden="true">#</a> Editing device table headers</h3>
<p>1、In the <strong>Table</strong> view, Click the <strong><u>Edit Headers</u></strong> button and an Edit Headers window will pop up.</p>
<p>2、You can select preferred headers to be displayed or hidden. Move the fields into Displayed Header List or Hidden Header List section by clicking the <strong><u>Select</u></strong> button.</p>
<p>3、You can also customize the orders of the headers by dragging the buttons on the right.</p>
<p>4、After you finished the edition, click the <strong><u>Submit</u></strong> button to apply the changes.</p>
<h3 id="batch-editing-device-information" tabindex="-1"><a class="header-anchor" href="#batch-editing-device-information" aria-hidden="true">#</a> Batch editing device information</h3>
<p>The Platform provides two ways to edit devices in batch as follows:</p>
<ul>
<li>
<p>By selection (For small batch of no more than 100 devices and with only minor changes on device information):</p>
<p>To have larger selection, the page size need to be configured. Then you can select these specific devices in one page, click the <strong><u>Action</u></strong> button and then click the <strong><u>Edit</u></strong> button, a Batch Edit Device Info window will pop up.</p>
<p>After the edition, click the <strong><u>Submit</u></strong> button to save the changes to the selected devices. <em>Please note: The <strong><u>Modify</u></strong> checkbox need to be checked to apply the corresponding changes.</em></p>
</li>
<li>
<p>Via file (For larger batch of more than 100 devices or with major changes on device information):</p>
<p>Simply click the <strong><u>Batch Edit Device Info</u></strong> button and a Batch Edit Device Info window will pop up. <em>Please note: Only added devices can be edited. Batch edit up to 5000 devices at a time.</em></p>
<p>By choosing <code>CSV</code> or <code>Excel</code> format and click the <strong><u>Download</u></strong> button, a corresponding device information edition template will ask to be downloaded (If you have downloaded the edition template already, you may skip this step).</p>
<p>After downloading the device information edition template, you can fill in the form.</p>
<p>These are fields in the template:</p>
<ul>
<li>
<p>&quot;SerialNumber&quot;, &quot;Group&quot;, &quot;Model&quot; are required fields:</p>
<ul>
<li>SerialNumber: Unique identifier of the device.</li>
<li>Group: The group name to which the device belongs. A group must exist in the system first, and has a corresponding relationship with the model. If it is not, please add it to the system first.</li>
<li>Model: Model name of the device.</li>
</ul>
</li>
<li>
<p>The remaining fields are optional:</p>
<ul>
<li>Alias: Must be 1-40 characters, special symbols only include &quot;_&quot; and &quot;-&quot;.</li>
<li>SimICCID: Must be 20 digits.</li>
<li>SimAutoUpdate: &quot;0&quot; means non-automatic update, &quot;1&quot; means automatic. By default it is 1, and leaving it empty is also regarded as the same.</li>
<li>Description: No more than 256 characters.</li>
<li>Tags: Must be 1-50 characters, including the numbers 0-9, the letters a-z and A-Z, the characters &quot;-&quot;, &quot;.&quot;, &quot;_&quot;, &quot;@&quot;, &quot;$&quot; and blank space. The number of tags for a device does not exceed 20 tags and tags are separated by &quot;,&quot;.</li>
<li>Attribute: The attribute is filled in by the header, such as &quot;attribute:xx&quot;, which means adding an attribute whose name is xx. Must be 1-50 characters, including the numbers 0-9, the letters a-z and A-Z, the characters &quot;-&quot;, &quot;.&quot;, &quot;_&quot;, &quot;@&quot;, &quot;$&quot; and blank space.</li>
</ul>
</li>
<li>
<p>Example:</p>
<table>
<thead>
<tr>
<th>SerialNumber</th>
<th>Alias</th>
<th>Group</th>
<th>Model</th>
<th>SimICCID</th>
<th>Description</th>
<th>Tags</th>
<th>Attribute.Address</th>
</tr>
</thead>
<tbody>
<tr>
<td>861901268000009</td>
<td>tmx07_0009</td>
<td>tmx07_20m</td>
<td>TMX07</td>
<td></td>
<td>Device 1</td>
<td>San Antonio, Atlanta</td>
<td>9442 North Capital of Texas Hwy</td>
</tr>
<tr>
<td>801046031113285</td>
<td>tmx08_3285</td>
<td>tmx08_2h</td>
<td>TMX08</td>
<td></td>
<td>Device 2</td>
<td>San Antonio, Atlanta</td>
<td>9445 North Capital of Texas Hwy</td>
</tr>
<tr>
<td>801046031097369</td>
<td>tmx08_7369</td>
<td>tmx08_1h</td>
<td>TMX08</td>
<td></td>
<td>Device 3</td>
<td>San Antonio, Atlanta</td>
<td>9442 North Capital of Texas Hwy</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p>Then click the <strong><u>Upload File</u></strong> button to select the file, and click the <strong><u>Import</u></strong> button to upload the file to batch edit device information. if some errors occurred during the edition, the error details will be displayed in the Import Log section. The edition will be terminated, and it does no impact on device list.</p>
</li>
</ul>
<h3 id="exporting-devices" tabindex="-1"><a class="header-anchor" href="#exporting-devices" aria-hidden="true">#</a> Exporting devices</h3>
<p>You can export devices by clicking the <strong><u>Export</u></strong> button on the top right. An Export window will pop up, then you can choose to get the Device List exported in <code>Excel</code> or <code>CSV</code> format.</p>
<h2 id="viewing-in-list" tabindex="-1"><a class="header-anchor" href="#viewing-in-list" aria-hidden="true">#</a> Viewing in list</h2>
<h3 id="searching-devices" tabindex="-1"><a class="header-anchor" href="#searching-devices" aria-hidden="true">#</a> Searching devices</h3>
<p>In the search box on the left, you can enter SN, Alias, ICCID, Attributes to find the device.</p>
<h3 id="filtering-devices" tabindex="-1"><a class="header-anchor" href="#filtering-devices" aria-hidden="true">#</a> Filtering devices</h3>
<p>Click the <strong><u>Filters</u></strong> icon on the left to pop up the Filters window, select the model, group or status to filter the devices.</p>
<h2 id="viewing-in-map" tabindex="-1"><a class="header-anchor" href="#viewing-in-map" aria-hidden="true">#</a> Viewing in map</h2>
<h3 id="positioning-devices" tabindex="-1"><a class="header-anchor" href="#positioning-devices" aria-hidden="true">#</a> Positioning devices</h3>
<p>Map page provides the ability to locate the device.</p>
<p>You can set a targeting point on the map. So that it will display the map with the targeting point as the center every time after entering the Map view. Simply right click the place where you would like to set as the targeting point on the map, and click the <strong>Targeting point setting</strong> button, the specific place will be set as the targeting point.</p>
<h3 id="viewing-devices-statistics-data" tabindex="-1"><a class="header-anchor" href="#viewing-devices-statistics-data" aria-hidden="true">#</a> Viewing devices statistics data</h3>
<p>A device list is on the right side to show device information for each device in the visible area, including alias, serial number, model name, PID, group name, locating type, detailed address and corresponding device data if configured.</p>
<h3 id="viewing-devices-specific-data" tabindex="-1"><a class="header-anchor" href="#viewing-devices-specific-data" aria-hidden="true">#</a> Viewing devices specific data</h3>
<p>By configuring a data field, the corresponding data will display in the list and also above the location points of devices. If the corresponding data has not been generated yet, it will display as &quot;--&quot;.</p>
</template>
