<style>

    x-account {
        display: flex;
        flex-direction: column;
        --spacing: 1.5rem;
        background: rgba(0,0,0,0.025);
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
    }

    .bottom-space {
        height: 7em;
        flex: none;
    }

    .main {
        flex: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: var(--spacing);
        padding-top: calc(var(--spacing) * 2);
    }

    .main > .end {
        font-size: 1.1em;
        display: flex;
        flex-direction: column;
        margin-left: 1.5em;
    }

    .main > .end > div {
        flex: none;
        white-space: nowrap;
        line-height: 1.5em;
    }

    .letter {
        font-size: 3em;
        text-transform: uppercase;
        width: 2em;
        height: 2em;
        background: var(--pc);
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
    }

    .cols {
        padding: 0 calc(var(--spacing) * 0.5);
        display: flex;
        flex: none;
    }


    .wide .cols {
        //flex-direction: row;
        flex-direction: column;
    }

    .narrow .cols {
        flex-direction: column;
    }

    .narrow .col {
        width: 100%;
    }

    .wide .col {
        width: 100%;
        //width: 50%;
    }

    .col {
        box-sizing: border-box;
        padding: 0 calc(var(--spacing) * 0.5);
        flex: none;
        display: flex;
        flex-direction: column;
    }

    .box {
        margin: calc(var(--spacing) * 0.5) 0;
        flex: none;
    }

    .box-title {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .box-title > .comment {
        font-size: 0.7em;
        color: #666;
        margin-inline-start: 0.5em;
    }

    .col-2{}

    .quota {}
    .quota-body {
        display: flex;
        flex-direction: row;
        flex: none;
    }

    .quota-body > :global(svg) {
        width: 10em;
        height: 10em;
    }

    .quota-desc {
        flex: none;
        align-self: center;
    }

    .quota-desc > .percent {
        font-size: 1.5em;
        font-weight: 500;
        color: var(--pc);
        margin-bottom: 0.1em;
    }

    .quota-desc > .used {
        font-size: 1.15em;
        color: #333;
    }

    .quota-desc > .total {
        font-size: 1.15em;
        color: #666;
    }


    .unimplemented {
        height: 25em;
    }
</style>

<script>
    export let user;

    import {getContext} from "svelte";
    const {locale: l, trans} = getContext("app");
    export let locale = $l.myAccount;

    console.log(user);

    let clientWidth = 0;
    let letter = user.name[0] || "";

    let narrow, wide;
    $: narrow = clientWidth < 900;
    $: wide = !narrow;

    import CircularGraph from "comp@CircularGraph/CircularGraph.svelte";
    import Arc from "comp@CircularGraph/Arc.svelte";

    const GB = (size) => (size / 1024 ** 3).toFixed(2);
</script>

<x-account bind:clientWidth class:narrow class:wide>
    <div class="main">
        <div class="letter">{letter}</div>
        <div class="end">
            <div class="name">{user.name}</div>
            <div class="username">{user.username}</div>
            <div class="address">{user.address}</div>
        </div>
    </div>
    <div class="cols">
        <div class="col col-1">
            <div class="box quota storage-quota">
                <div class="box-title">
                    {locale.limits.storage.title}
                </div>
                <div class="quota-body">
                    <CircularGraph>
                        <Arc start={0} end={0.99} stroke="rgba(0,0,0,0.075)" />
                        <Arc start={0} end={user.limits.quota.used / user.limits.quota.allowed} stroke="var(--pc)" />
                    </CircularGraph>
                    <div class="quota-desc">
                        <div class="percent">{Math.round(user.limits.quota.used / user.limits.quota.allowed * 100)}%</div>
                        <div class="used">{$trans("myAccount.limits.gbUsed", {gb: GB(user.limits.quota.used)})}</div>
                        <div class="total">{$trans("myAccount.limits.gbTotal", {gb: GB(user.limits.quota.allowed)})}</div>
                    </div>
                </div>
            </div>

            <div class="box quota imap-download-quota">
                <div class="box-title">
                    {locale.limits.imapDownload.title}
                    <span class="comment">{locale.limits.imapDownload.comment}</span>
                </div>
                <div class="quota-body">
                    <CircularGraph>
                        <Arc start={0} end={0.99} stroke="rgba(0,0,0,0.075)" />
                        <Arc start={0} end={user.limits.imapDownload.used / user.limits.imapDownload.allowed} stroke="var(--pc)" />
                    </CircularGraph>
                    <div class="quota-desc">
                        <div class="percent">{Math.round(user.limits.imapDownload.used / user.limits.imapDownload.allowed * 100)}%</div>
                        <div class="used">{$trans("myAccount.limits.gbUsed", {gb: GB(user.limits.imapDownload.used)})}</div>
                        <div class="total">{$trans("myAccount.limits.gbTotal", {gb: GB(user.limits.imapDownload.allowed)})}</div>
                    </div>
                </div>
            </div>

            <div class="box quota imap-upload-quota">
                <div class="box-title">
                    {locale.limits.imapUpload.title}
                    <span class="comment">{locale.limits.imapUpload.comment}</span>
                </div>
                <div class="quota-body">
                    <CircularGraph>
                        <Arc start={0} end={0.99} stroke="rgba(0,0,0,0.075)" />
                        <Arc start={0} end={user.limits.imapUpload.used / user.limits.imapUpload.allowed} stroke="var(--pc)" />
                    </CircularGraph>
                    <div class="quota-desc">
                        <div class="percent">{Math.round(user.limits.imapUpload.used / user.limits.imapUpload.allowed * 100)}%</div>
                        <div class="used">{$trans("myAccount.limits.gbUsed", {gb: GB(user.limits.imapUpload.used)})}</div>
                        <div class="total">{$trans("myAccount.limits.gbTotal", {gb: GB(user.limits.imapUpload.allowed)})}</div>
                    </div>
                </div>
            </div>

            <div class="box quota pop3-download-quota">
                <div class="box-title">
                    {locale.limits.pop3Download.title}
                    <span class="comment">{locale.limits.pop3Download.comment}</span>
                </div>
                <div class="quota-body">
                    <CircularGraph>
                        <Arc start={0} end={0.99} stroke="rgba(0,0,0,0.075)" />
                        <Arc start={0} end={user.limits.pop3Download.used / user.limits.pop3Download.allowed} stroke="var(--pc)" />
                    </CircularGraph>
                    <div class="quota-desc">
                        <div class="percent">{Math.round(user.limits.pop3Download.used / user.limits.pop3Download.allowed * 100)}%</div>
                        <div class="used">{$trans("myAccount.limits.gbUsed", {gb: GB(user.limits.pop3Download.used)})}</div>
                        <div class="total">{$trans("myAccount.limits.gbTotal", {gb: GB(user.limits.pop3Download.allowed)})}</div>
                    </div>
                </div>
            </div>

            <div class="box quota received-quota">
                <div class="box-title">
                    {locale.limits.received.title}
                    <span class="comment">{locale.limits.received.comment}</span>
                </div>
                <div class="quota-body">
                    <CircularGraph>
                        <Arc start={0} end={0.99} stroke="rgba(0,0,0,0.075)" />
                        <Arc start={0} end={user.limits.received.used / user.limits.received.allowed} stroke="var(--pc)" />
                    </CircularGraph>
                    <div class="quota-desc">
                        <div class="percent">{Math.round(user.limits.received.used / user.limits.received.allowed * 100)}%</div>
                        <div class="used">{$trans("myAccount.limits.messagesUsed", {n: user.limits.received.used})}</div>
                        <div class="total">{$trans("myAccount.limits.messagesTotal", {n: user.limits.received.allowed})}</div>
                    </div>
                </div>
            </div>

            <div class="box quota received-quota">
                <div class="box-title">
                    {locale.limits.recipients.title}
                    <span class="comment">{locale.limits.recipients.comment}</span>
                </div>
                <div class="quota-body">
                    <CircularGraph>
                        <Arc start={0} end={0.99} stroke="rgba(0,0,0,0.075)" />
                        <Arc start={0} end={user.limits.recipients.used / user.limits.recipients.allowed} stroke="var(--pc)" />
                    </CircularGraph>
                    <div class="quota-desc">
                        <div class="percent">{Math.round(user.limits.recipients.used / user.limits.recipients.allowed * 100)}%</div>
                        <div class="used">{$trans("myAccount.limits.messagesUsed", {n: user.limits.recipients.used})}</div>
                        <div class="total">{$trans("myAccount.limits.messagesTotal", {n: user.limits.recipients.allowed})}</div>
                    </div>
                </div>
            </div>

            <div class="box quota received-quota">
                <div class="box-title">
                    {locale.limits.forwards.title}
                    <span class="comment">{locale.limits.forwards.comment}</span>
                </div>
                <div class="quota-body">
                    <CircularGraph>
                        <Arc start={0} end={0.99} stroke="rgba(0,0,0,0.075)" />
                        <Arc start={0} end={user.limits.forwards.used / user.limits.forwards.allowed} stroke="var(--pc)" />
                    </CircularGraph>
                    <div class="quota-desc">
                        <div class="used">{$trans("myAccount.limits.messagesUsed", {n: user.limits.forwards.used})}</div>
                        <div class="total">{$trans("myAccount.limits.messagesTotal", {n: user.limits.forwards.allowed})}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="bottom-space"></div>
</x-account>