#  tests for cryptography-36.0.1-py39hfb8cd70_0 (this is a generated file);
print('===== testing package: cryptography-36.0.1-py39hfb8cd70_0 =====');
print('running run_test.py');
#  --- run_test.py (begin) ---
import re
import subprocess
import time
from cryptography.hazmat.backends.openssl import backend

# the version that cryptography uses
linked_version = backend.openssl_version_text()
# the version present in the conda environment
env_version = subprocess.check_output('openssl version', shell=True).decode('utf8').strip()
# strip off possible brackets from e.g. "OpenSSL 3.0.0 7 sep 2021 (Library: OpenSSL 3.0.0 7 sep 2021)"
env_version = re.sub(r"(?P<version>OpenSSL [\d\.]+ \d+ [a-z]{3} 20\d\d)(?P<irrelevant> \(.*\))?",
                     r"\1", env_version)

print('Version used by cryptography:\n{linked_version}'.format(linked_version=linked_version))
print('Version in conda environment:\n{env_version}'.format(env_version=env_version))

# avoid race condition between print and (possible) AssertionError
time.sleep(1)

# linking problems have appeared on windows before (see issue #38),
# and were only caught by lucky accident through the test suite.
# This is intended to ensure it does not happen again.
assert linked_version == env_version
#  --- run_test.py (end) ---

print('===== cryptography-36.0.1-py39hfb8cd70_0 OK =====');
print("import: 'cryptography'")
import cryptography

print("import: 'cryptography.fernet'")
import cryptography.fernet

print("import: 'cryptography.hazmat'")
import cryptography.hazmat

print("import: 'cryptography.hazmat.backends'")
import cryptography.hazmat.backends

print("import: 'cryptography.hazmat.backends.openssl'")
import cryptography.hazmat.backends.openssl

print("import: 'cryptography.hazmat.bindings'")
import cryptography.hazmat.bindings

print("import: 'cryptography.hazmat.bindings.openssl'")
import cryptography.hazmat.bindings.openssl

print("import: 'cryptography.hazmat.primitives'")
import cryptography.hazmat.primitives

print("import: 'cryptography.hazmat.primitives.asymmetric'")
import cryptography.hazmat.primitives.asymmetric

print("import: 'cryptography.hazmat.primitives.ciphers'")
import cryptography.hazmat.primitives.ciphers

print("import: 'cryptography.hazmat.primitives.kdf'")
import cryptography.hazmat.primitives.kdf

print("import: 'cryptography.hazmat.primitives.twofactor'")
import cryptography.hazmat.primitives.twofactor

print("import: 'cryptography.x509'")
import cryptography.x509

