# cfg.py
HOST = "irc.chat.twitch.tv"                     # the Twitch IRC server
PORT = 6667                                     # always use port 6667!
NICK = "AmodBot"                                # your Twitch username, lowercase
PASS = "oauth:n6o080roj5ctfpve32e50s5knvfl6k"   # your Twitch OAuth token
CHAN = "z_to_the_z"                            # the channel you want to join

# cfg.py
RATE = (20/30) # messages per second

#:nickname!nickname@nickname.tmi.twitch.tv PRIVMSG #channel :message

# cfg.py
PATT = [
    r"swear",
    # ...
    r"some_pattern"
]
